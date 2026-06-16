export function PricingTable() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      tunnels: "1",
      tokens: "2",
      retention: "24 hours",
      subdomains: "Random",
      customDomains: false,
    },
    {
      name: "Pro",
      price: "$9 / mo",
      tunnels: "10",
      tokens: "25",
      retention: "7 days",
      subdomains: "Reserved",
      customDomains: false,
      popular: true,
    },
    {
      name: "Max",
      price: "$19 / mo",
      tunnels: "50",
      tokens: "100",
      retention: "30 days",
      subdomains: "Reserved",
      customDomains: true,
    },
  ];

  return (
    <div className="my-8 grid gap-6 md:grid-cols-3">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`relative rounded-xl border bg-card p-6 ${
            plan.popular ? "ring-1 ring-primary" : ""
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border bg-background px-3 py-1 text-xs">
              Popular
            </div>
          )}

          <h3 className="text-xl font-semibold">{plan.name}</h3>

          <div className="mt-4 text-3xl font-bold">
            {plan.price}
          </div>

          <div className="mt-6 space-y-3 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>Tunnels</span>
              <span>{plan.tunnels}</span>
            </div>

            <div className="flex justify-between">
              <span>Tokens</span>
              <span>{plan.tokens}</span>
            </div>

            <div className="flex justify-between">
              <span>Retention</span>
              <span>{plan.retention}</span>
            </div>

            <div className="flex justify-between">
              <span>Subdomains</span>
              <span>{plan.subdomains}</span>
            </div>

            <div className="flex justify-between">
              <span>Custom Domains</span>
              <span>{plan.customDomains ? "✅" : "—"}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}