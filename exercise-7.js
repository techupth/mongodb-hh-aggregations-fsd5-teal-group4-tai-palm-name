// Paste the complete MQL here

db.pizzaOrders.aggregate([
  {
    $group: {
      _id: { year: { $year: "$created_at" }, month: { $month: "$created_at" } },
      total_price_per_month: { $sum: "$total_price" },
    },
  },
  { $match: { "_id.year": 2021, "_id.month": 7 } },
  { $sort: { total_price_per_month: 1 } },
  { $limit: 1 },
]);
