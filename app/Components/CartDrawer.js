"use client";
import { useState } from "react";

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
  const [step, setStep] = useState("cart"); // 'cart' | 'checkout' | 'success'
  const [loading, setLoading] = useState(false);
  const [lastOrder, setLastOrder] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "Dhaka",
    address: "",
    notes: "",
    paymentMethod: "Cash on Delivery",
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? (formData.city === "Dhaka" ? 60 : 120) : 0;
  const grandTotal = subtotal + deliveryFee;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setLoading(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart,
          customer: formData,
          paymentMethod: formData.paymentMethod,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setLastOrder(data.order);
        setStep("success");
        onClearCart();
      } else {
        alert(data.error || "Failed to place order. Please try again.");
      }
    } catch {
      alert("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                🛒
              </div>
              <h2 className="text-lg font-bold text-slate-800">
                {step === "cart" && "Shopping Cart"}
                {step === "checkout" && "Complete Your Order"}
                {step === "success" && "Order Confirmed!"}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-5">
            {/* Step 1: Cart View */}
            {step === "cart" && (
              <>
                {cart.length === 0 ? (
                  <div className="text-center py-20 text-slate-400">
                    <div className="text-5xl mb-3">📚</div>
                    <p className="text-lg font-semibold text-slate-700">Your cart is empty</p>
                    <p className="text-sm mt-1">Browse our collection of Bangladeshi and English books.</p>
                    <button
                      onClick={onClose}
                      className="mt-6 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-sm font-semibold transition shadow-sm"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-3 p-3 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 transition shadow-xs"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-20 object-cover rounded-xl bg-slate-100 shrink-0"
                          onError={(e) => {
                            e.target.src = `https://via.placeholder.com/100x120?text=Book`;
                          }}
                        />
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start">
                              <h4 className="text-sm font-bold text-slate-800 line-clamp-1">
                                {item.title}
                              </h4>
                              <button
                                onClick={() => onRemoveItem(item.id)}
                                className="text-xs text-red-500 hover:text-red-700 ml-2"
                              >
                                ✕
                              </button>
                            </div>
                            <p className="text-xs text-slate-400">{item.author}</p>
                            <span className="text-xs text-amber-600 font-medium">
                              ৳{item.price} each
                            </span>
                          </div>

                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                className="px-2.5 py-0.5 text-slate-600 hover:bg-slate-100 text-sm font-semibold"
                              >
                                -
                              </button>
                              <span className="px-3 py-0.5 text-xs font-bold text-slate-800 bg-slate-50">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                className="px-2.5 py-0.5 text-slate-600 hover:bg-slate-100 text-sm font-semibold"
                              >
                                +
                              </button>
                            </div>
                            <span className="text-sm font-extrabold text-slate-800">
                              ৳{item.price * item.quantity}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Step 2: Checkout Form */}
            {step === "checkout" && (
              <form id="checkout-form" onSubmit={handleSubmitOrder} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sajjad Hossain"
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="017XXXXXXXX"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Delivery City / Division *
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  >
                    <option value="Dhaka">Dhaka (Inside City - ৳60)</option>
                    <option value="Chattogram">Chattogram (Outside City - ৳120)</option>
                    <option value="Sylhet">Sylhet (Outside City - ৳120)</option>
                    <option value="Rajshahi">Rajshahi (Outside City - ৳120)</option>
                    <option value="Khulna">Khulna (Outside City - ৳120)</option>
                    <option value="Barishal">Barishal (Outside City - ৳120)</option>
                    <option value="Rangpur">Rangpur (Outside City - ৳120)</option>
                    <option value="Mymensingh">Mymensingh (Outside City - ৳120)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Delivery Address *
                  </label>
                  <textarea
                    required
                    name="address"
                    rows={2}
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="House, Road, Area, Post code"
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    {["Cash on Delivery", "bKash / Nagad", "Online Card"].map((method) => (
                      <label
                        key={method}
                        className={`flex items-center gap-2 p-3 border rounded-xl cursor-pointer text-xs font-semibold transition ${
                          formData.paymentMethod === method
                            ? "border-amber-500 bg-amber-50/50 text-amber-900"
                            : "border-slate-200 text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method}
                          checked={formData.paymentMethod === method}
                          onChange={handleChange}
                          className="accent-amber-500"
                        />
                        {method}
                      </label>
                    ))}
                  </div>
                </div>

                {formData.paymentMethod === "bKash / Nagad" && (
                  <div className="p-3 bg-pink-50 border border-pink-100 rounded-xl text-xs text-pink-800">
                    <p className="font-bold">📱 Mobile Banking Instructions:</p>
                    <p className="mt-1">
                      Send Money to <strong>01700-123456</strong> (Merchant). Use your phone number as reference.
                    </p>
                  </div>
                )}
              </form>
            )}

            {/* Step 3: Success Confirmation */}
            {step === "success" && lastOrder && (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 animate-bounce">
                  ✓
                </div>
                <h3 className="text-xl font-extrabold text-slate-800">Order Placed Successfully!</h3>
                <p className="text-xs text-slate-500 mt-1">
                  We have received your order and are preparing it for delivery.
                </p>

                <div className="my-6 p-4 bg-slate-50 border border-slate-100 rounded-2xl text-left space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Order ID:</span>
                    <span className="font-mono font-bold text-slate-800">{lastOrder.orderId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Recipient:</span>
                    <span className="font-medium text-slate-800">{lastOrder.customer.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Phone:</span>
                    <span className="font-medium text-slate-800">{lastOrder.customer.phone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Delivery To:</span>
                    <span className="font-medium text-slate-800 line-clamp-1">{lastOrder.customer.address}, {lastOrder.customer.city}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Payment:</span>
                    <span className="font-medium text-slate-800">{lastOrder.paymentMethod}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Estimated Delivery:</span>
                    <span className="font-medium text-amber-600">{lastOrder.estimatedDelivery}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200 flex justify-between text-sm font-bold text-slate-900">
                    <span>Total Amount:</span>
                    <span>৳{lastOrder.totalAmount}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setStep("cart");
                    onClose();
                  }}
                  className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-sm transition"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>

          {/* Footer / Summary */}
          {cart.length > 0 && step !== "success" && (
            <div className="p-5 border-t border-slate-100 bg-slate-50/70 space-y-3">
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-800">৳{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery ({formData.city})</span>
                  <span className="font-semibold text-slate-800">৳{deliveryFee}</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Grand Total</span>
                  <span className="text-amber-600">৳{grandTotal}</span>
                </div>
              </div>

              {step === "cart" ? (
                <button
                  onClick={() => setStep("checkout")}
                  className="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-xl text-sm shadow-md transition-all hover:scale-[1.01]"
                >
                  Proceed to Checkout →
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setStep("cart")}
                    className="px-4 py-3 border border-slate-200 hover:bg-slate-100 text-slate-700 font-semibold rounded-xl text-xs transition"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    form="checkout-form"
                    disabled={loading}
                    className="flex-1 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-xl text-sm shadow-md transition-all hover:scale-[1.01] disabled:opacity-50"
                  >
                    {loading ? "Placing Order..." : `Confirm Order (৳${grandTotal})`}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
