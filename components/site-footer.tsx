import Link from "next/link";
import { Twitter, Instagram, Mail } from "lucide-react";

export function SiteFooter() {
    return (
        <footer className="border-t bg-muted/30">
            <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-bold text-primary mb-4">Lilac</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">ボードゲームを通じて楽しい時間を共有するサークルです。 初心者から経験者まで、誰でも歓迎します。</p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">リンク</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                                    トップページ
                                </Link>
                            </li>
                            <li>
                                <Link href="/members" className="text-muted-foreground hover:text-primary transition-colors">
                                    メンバー紹介
                                </Link>
                            </li>
                            <li>
                                <Link href="/activities" className="text-muted-foreground hover:text-primary transition-colors">
                                    活動記録
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">SNS</h3>
                        <div className="flex gap-4">
                            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="mailto:contact@lilac.example.com" className="text-muted-foreground hover:text-primary transition-colors">
                                <Mail className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
                    <p>&copy; 2025 ボードゲームサークル Lilac. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
