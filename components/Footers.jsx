import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

function Footers() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-16">
            {/* Bagian Atas */}
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-600">

                {/* Brand */}
                <div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">PuBox Store</h2>
                    <p className="text-sm leading-relaxed">
                        Toko resmi produk smartphone terbaik. Nikmati kemudahan belanja dan pelayanan premium di seluruh Indonesia.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Produk</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-gray-900 transition">iPhone</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition">Samsung</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition">Google</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition">Dan Lainnya</a></li>
                    </ul>
                </div>

                {/* Bantuan */}
                <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Bantuan</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-gray-900 transition">Hubungi Kami</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition">Garansi Produk</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition">Kebijakan Pengembalian</a></li>
                        <li><a href="#" className="hover:text-gray-900 transition">FAQ</a></li>
                    </ul>
                </div>

                {/* Sosial Media */}
                <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Ikuti Kami</h3>
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-transform transform hover:scale-110 text-gray-600 hover:text-gray-900"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-5 h-5" />
                        </a>

                        <a
                            href="#"
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-transform transform hover:scale-110 text-gray-600 hover:text-gray-900"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>

                        <a
                            href="#"
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-transform transform hover:scale-110 text-gray-600 hover:text-gray-900"
                            aria-label="Twitter"
                        >
                            <Twitter className="w-5 h-5" />
                        </a>

                        <a
                            href="#"
                            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-transform transform hover:scale-110 text-gray-600 hover:text-gray-900"
                            aria-label="YouTube"
                        >
                            <Youtube className="w-5 h-5" />
                        </a>
                    </div>

                </div>
            </div>

            {/* Garis Pemisah */}
            <div className="border-t border-gray-200" />

            {/* Copy Right */}
            <div className="text-center py-6 text-gray-500 text-sm">
                © {new Date().getFullYear()} <span className="font-medium text-gray-900">Fadllan Rizky</span>.
                All Rights Reserved.
            </div>
        </footer>
    );
}

export default Footers;
