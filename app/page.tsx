import { HeroSlideshow } from "@/components/hero-slideshow";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dice3, Users, Calendar, Heart } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <SiteHeader />

            <main className="flex-1">
                <section className="container py-8">
                    <HeroSlideshow />
                </section>

                <section className="container py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-balance">Lilacについて</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">私たちは、ボードゲームを愛する仲間が集まるサークルです。 毎週楽しくゲームを楽しんでいます。</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="border-2 hover:border-primary transition-colors">
                            <CardHeader>
                                <Dice3 className="h-10 w-10 text-primary mb-2" />
                                <CardTitle>多彩なゲーム</CardTitle>
                                <CardDescription>定番から最新作まで、100種類以上のボードゲームを所有しています。</CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-2 hover:border-primary transition-colors">
                            <CardHeader>
                                <Users className="h-10 w-10 text-primary mb-2" />
                                <CardTitle>温かいコミュニティ</CardTitle>
                                <CardDescription>初心者から経験者まで、誰でも歓迎。みんなで楽しく遊びます。</CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-2 hover:border-primary transition-colors">
                            <CardHeader>
                                <Calendar className="h-10 w-10 text-primary mb-2" />
                                <CardTitle>定期的な活動</CardTitle>
                                <CardDescription>毎週末に活動を開催。都合の良い日に気軽に参加できます。</CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-2 hover:border-primary transition-colors">
                            <CardHeader>
                                <Heart className="h-10 w-10 text-primary mb-2" />
                                <CardTitle>楽しい仲間</CardTitle>
                                <CardDescription>ゲームを通じて新しい友達ができる、アットホームな雰囲気です。</CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </section>

                <section className="bg-secondary/30 py-16">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4 text-balance">活動内容</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">毎週末、さまざまなボードゲームで楽しく遊んでいます</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>週末ゲーム会</CardTitle>
                                    <CardDescription>毎週土曜日 14:00-19:00</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <img src="/board-game-session-on-weekend.jpg" alt="週末ゲーム会" className="w-full h-48 object-cover rounded-lg mb-4" />
                                    <p className="text-sm text-muted-foreground leading-relaxed">定番ゲームから新作まで、自由に遊べるゲーム会です。</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>初心者向け体験会</CardTitle>
                                    <CardDescription>毎月第2日曜日 13:00-17:00</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <img src="/beginners-learning-board-games.jpg" alt="初心者向け体験会" className="w-full h-48 object-cover rounded-lg mb-4" />
                                    <p className="text-sm text-muted-foreground leading-relaxed">ボードゲーム初心者向けに、ルールから丁寧に教えます。</p>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle>大会イベント</CardTitle>
                                    <CardDescription>不定期開催</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <img src="/board-game-tournament-competition.jpg" alt="大会イベント" className="w-full h-48 object-cover rounded-lg mb-4" />
                                    <p className="text-sm text-muted-foreground leading-relaxed">人気ゲームの大会を開催。盛り上がること間違いなし！</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="container py-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-balance">リンク</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>メンバー紹介</CardTitle>
                                <CardDescription>Lilacのメンバーを紹介します</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Link href="/members">
                                    <Button className="w-full">メンバーを見る</Button>
                                </Link>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>活動記録</CardTitle>
                                <CardDescription>これまでの活動の様子をご覧ください</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Link href="/activities">
                                    <Button className="w-full">活動記録を見る</Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section className="bg-secondary/30 py-16">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4 text-balance">活動場所</h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">アクセスしやすい場所で活動しています</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
                            <Card>
                                <CardHeader>
                                    <CardTitle>主な活動場所</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <h3 className="font-semibold mb-2">コミュニティセンター A</h3>
                                        <p className="text-sm text-muted-foreground mb-1">〒100-0001 東京都千代田区千代田1-1-1</p>
                                        <p className="text-sm text-muted-foreground">最寄り駅：東京駅 徒歩5分</p>
                                    </div>
                                    <div className="pt-2">
                                        <p className="text-sm leading-relaxed">駅から近く、広々とした会議室で快適に遊べます。週末は主にこちらで活動しています。</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="h-full">
                                <CardContent className="p-0">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.827853992994!2d139.7640572!3d35.6812362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfbd89f700b%3A0x277c49ba34ed38!2z5p2x5Lqs6aeF!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                                        width="100%"
                                        height="400"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-lg"
                                    ></iframe>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="bg-primary text-primary-foreground py-16">
                    <div className="container text-center">
                        <h2 className="text-4xl font-bold mb-4 text-balance">一緒にボードゲームを楽しみませんか？</h2>
                        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed text-balance">見学や体験参加も大歓迎です。お気軽にご連絡ください。</p>
                        <Button size="lg" variant="secondary">
                            お問い合わせ
                        </Button>
                    </div>
                </section>
            </main>

            <SiteFooter />
        </div>
    );
}
