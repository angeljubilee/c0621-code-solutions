select "customers"."firstName", "customers"."lastName", sum("payments"."amount") as "total"
  from "customers"
  join "payments" using ("customerId")
  group by "customerId"
  order by "total" desc;
