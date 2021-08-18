select "customers"."firstName", "customers"."lastName" from "customers"
  join "payments" using ("customerId");
