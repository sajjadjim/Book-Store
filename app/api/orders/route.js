export async function POST(request) {
  try {
    const body = await request.json();
    const { items, customer, paymentMethod } = body;

    if (!items || items.length === 0) {
      return Response.json({ error: "Cart is empty" }, { status: 400 });
    }

    if (!customer?.name || !customer?.email || !customer?.phone || !customer?.address) {
      return Response.json({ error: "Customer information is required" }, { status: 400 });
    }

    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    const totalAmount = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const order = {
      orderId,
      items,
      customer,
      paymentMethod: paymentMethod || "Cash on Delivery",
      totalAmount,
      status: "Confirmed",
      estimatedDelivery: "3-5 Business Days",
      createdAt: new Date().toISOString(),
      message: `Thank you ${customer.name}! Your order #${orderId} has been placed successfully.`,
    };

    return Response.json({ success: true, order }, { status: 201 });
  } catch (err) {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }
}
