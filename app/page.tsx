import { HeroSlideshow } from "@/components/hero-slideshow";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dice3, Users, Calendar, BadgeJapaneseYen, Landmark } from "lucide-react";
import { PageContainer } from "@/components/page-container";
import Link from "next/link";

const features = [
    {
        title: "居心地のよいコミュニティ",
        description: "初心者から経験者まで大歓迎。穏和な雰囲気のメンバーが集まり、初めての方でも安心して楽しめます。",
        Icon: Users,
    },
    {
        title: "5年以上続く、安定した活動実績",
        description: "Lilacは5年以上にわたり継続して活動してきました。長く続いているからこその信頼と安心感があります。",
        Icon: Calendar,
    },
    {
        title: "アクセスがよく、快適な会場",
        description: "駅から徒歩1分の好立地。清潔で落ち着いた空間で、快適にボードゲームを楽しめます。",
        Icon: Landmark,
    },
    {
        title: "気軽に参加できる参加費",
        description: "一日たっぷり遊べて参加費は300円。気軽に参加できます。",
        Icon: BadgeJapaneseYen,
    },
];

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <SiteHeader />

            <main className="flex-1">
                <section className="py-8">
                    <PageContainer>
                        <HeroSlideshow />
                    </PageContainer>
                </section>

                <section className="py-16">
                    <PageContainer>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4">Lilacについて</h2>
                            <img src="/lilac-logo.png" alt="Lilac コミュニティアイコン" className="mx-auto mb-6 h-32 w-32 rounded-full" />
                            <p className="text-lg text-muted-foreground font-bold max-w-4xl mx-auto leading-relaxed">
                                Lilacは、ボードゲーム好きが集まり、月に一度みんなで楽しく遊ぶコミュニティです。
                                <br />
                                気軽なゲームを好む人から、じっくり考えるゲームを好む人まで、多様なメンバーが集まっています。
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map(({ title, description, Icon }) => (
                                <Card key={title} className="border-2 transition-all hover:border-primary hover:shadow-md hover:-translate-y-1">
                                    <CardHeader>
                                        <Icon className="h-10 w-10 text-primary mb-2" />
                                        <CardTitle>{title}</CardTitle>
                                        <CardDescription>{description}</CardDescription>
                                    </CardHeader>
                                </Card>
                            ))}
                        </div>
                    </PageContainer>
                </section>

                <section className="bg-secondary/30 py-16">
                    <PageContainer>
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
                    </PageContainer>
                </section>

                <section className="py-16">
                    <PageContainer>
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
                    </PageContainer>
                </section>

                <section className="bg-secondary/30 py-16">
                    <PageContainer>
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4 text-balance">主な活動場所</h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
                            <Card>
                                <CardHeader>
                                    <CardTitle>千里ニュータウンプラザ6階 ラコルタ</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <p className="text-sm leading-relaxed">大阪府吹田市津雲台1丁目2番1号 千里ニュータウンプラザ6階 ラコルタ</p>
                                        <p className="text-sm leading-relaxed">最寄り駅：南千里駅 徒歩1分</p>
                                    </div>
                                    <div className="pt-2">
                                        <p className="text-sm leading-relaxed">駅から近く、綺麗な部屋で快適に遊べます</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="h-full">
                                <CardContent className="p-0">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.512428969997!2d135.50589667625755!3d34.793047772886965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e4b523619289%3A0x27920573b9ee5440!2z44Op44Kz44Or44K_772c5ZC555Sw5biC56uL5biC5rCR5YWs55uK5rS75YuV44K744Oz44K_44O8!5e0!3m2!1sja!2sjp!4v1765708544604!5m2!1sja!2sjp"
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
                    </PageContainer>
                </section>

                <section className="bg-primary text-primary-foreground py-16">
                    <div className="text-center">
                        <PageContainer>
                            <h2 className="text-4xl font-bold mb-4 text-balance">一緒にボードゲームを楽しみませんか？</h2>
                            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed text-balance">見学や体験参加も大歓迎です。お気軽にご連絡ください。</p>
                            <Button size="lg" variant="secondary">
                                お問い合わせ
                            </Button>
                        </PageContainer>
                    </div>
                </section>
            </main>

            <SiteFooter />
        </div>
    );
}
