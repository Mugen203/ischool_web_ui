"use client";

import { Check, CreditCard } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

const paymentMethods = [
  {
    value: "credit-card",
    label: "Credit Card",
  },
  {
    value: "bank-transfer",
    label: "Bank Transfer",
  },
  {
    value: "paypal",
    label: "PayPal",
  },
];

export function PaymentMethods() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? paymentMethods.find((method) => method.value === value)?.label
            : "Select payment method..."}
          <CreditCard className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search payment method..." />
          <CommandList>
            <CommandEmpty>No payment method found.</CommandEmpty>
            <CommandGroup>
              {paymentMethods.map((method) => (
                <CommandItem
                  key={method.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === method.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {method.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
