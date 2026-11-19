import Link from "next/link";
import { ShoppingBag, Mail, ShieldCheck, Truck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#EFEAE5] text-[#2C2420] border-t border-[#E5DFDA] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top trust strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-10 mb-10 border-b border-[#E5DFDA]">
          <div className="flex items-center gap-3 bg-[#FAF7F5] border border-[#E5DFDA] rounded-2xl p-4">
            <div className="p-2.5 rounded-xl bg-[#8C5E73]/10 text-[#8C5E73]">
              <Truck size={20} />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#1A120E]">Fast Delivery</p>
              <p className="text-xs text-[#5E4E46]">Smooth & reliable order dispatch</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#FAF7F5] border border-[#E5DFDA] rounded-2xl p-4">
            <div className="p-2.5 rounded-xl bg-[#8C5E73]/10 text-[#8C5E73]">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#1A120E]">Secure Checkout</p>
              <p className="text-xs text-[#5E4E46]">Protected account & payment flow</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#FAF7F5] border border-[#E5DFDA] rounded-2xl p-4">
            <div className="p-2.5 rounded-xl bg-[#8C5E73]/10 text-[#8C5E73]">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#1A120E]">Customer Support</p>
              <p className="text-xs text-[#5E4E46]">Easy help for orders & accounts</p>
            </div>
          </div>
        </div>

        {/* Main footer columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand summary */}
          <div className="space-y-3">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-[#8C5E73] text-white">
                <ShoppingBag size={18} />
              </span>
              <span className="text-xl font-serif font-bold tracking-tight text-[#1A120E]">
                Lumière
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-[#5E4E46] leading-relaxed">
              Curated everyday essentials and modern lifestyle pieces crafted for clean, effortless shopping.
            </p>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A120E] mb-3.5">
              Shop
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#5E4E46]">
              <li>
                <Link href="/products" className="hover:text-[#8C5E73] transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-[#8C5E73] transition-colors">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-[#8C5E73] transition-colors">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/orders" className="hover:text-[#8C5E73] transition-colors">
                  My Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Account links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A120E] mb-3.5">
              Account
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#5E4E46]">
              <li>
                <Link href="/login" className="hover:text-[#8C5E73] transition-colors">
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="/register" className="hover:text-[#8C5E73] transition-colors">
                  Create Account
                </Link>
              </li>
              <li>
                <Link href="/forgot-password" className="hover:text-[#8C5E73] transition-colors">
                  Forgot Password
                </Link>
              </li>
            </ul>
          </div>

          {/* Store note */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A120E] mb-3.5">
              Store Info
            </h3>
            <p className="text-xs sm:text-sm text-[#5E4E46] leading-relaxed">
              Need help with an order, login issue, or product details? Reach out anytime through our support channel.
            </p>
          </div>
        </div>

       {/* Bottom copyright bar */}
        <div className="mt-10 pt-6 border-t border-[#E5DFDA] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#5E4E46]">
          <p>© 2026 Lumière. All rights reserved.</p>
          <p>Designed for a clean & consistent shopping experience.</p>
        </div>
      </div>
    </footer>
  );
}