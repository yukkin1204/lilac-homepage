import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users } from "lucide-react";

const activities = [
    {
        date: "2025年1月11日",
        title: "新年ゲーム会",
        participants: 12,
        games: ["カタン", "ドミニオン", "コードネーム", "ナンジャモンジャ"],
        description: "新年最初のゲーム会を開催しました。新しいメンバーも3名参加し、大盛況でした。",
        image: "/board-game-session-new-year-celebration.jpg",
    },
    {
        date: "2024年12月28日",
        title: "年末大会イベント",
        participants: 18,
        games: ["カルカソンヌ", "チケット・トゥ・ライド", "パンデミック"],
        description: "年末恒例の大会イベント。各ゲームで熱い戦いが繰り広げられました。",
        image: "/board-game-tournament-competition.jpg",
    },
    {
        date: "2024年12月21日",
        title: "週末ゲーム会",
        participants: 10,
        games: ["宝石の煌き", "アグリコラ", "ラブレター", "ディクシット"],
        description: "今年最後の週末ゲーム会。みんなで楽しくゲームを楽しみました。",
        image: "/friends-playing-board-games-weekend.jpg",
    },
    {
        date: "2024年12月10日",
        title: "初心者体験会",
        participants: 8,
        games: ["カタン", "コードネーム", "ナンジャモンジャ"],
        description: "初心者向けの体験会。5名の新しい方が参加してくださいました。",
        image: "/beginners-learning-board-games.jpg",
    },
    {
        date: "2024年12月7日",
        title: "週末ゲーム会",
        participants: 14,
        games: ["パンデミック", "ドミニオン", "ワンナイト人狼", "テラフォーミング・マーズ"],
        description: "重量級から軽量級まで、幅広いゲームを楽しみました。",
        image: "/diverse-board-games-on-table.jpg",
    },
    {
        date: "2024年11月30日",
        title: "週末ゲーム会",
        participants: 11,
        games: ["カルカソンヌ", "アズール", "チケット・トゥ・ライド"],
        description: "タイルゲーム特集。戦略的なゲームプレイを楽しみました。",
        image: "/tile-based-board-games.jpg",
    },
];

export default function ActivitiesPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <SiteHeader />

            <main className="flex-1">
                <section className="bg-secondary/30 py-16">
                    <div className="container">
                        <h1 className="text-5xl font-bold text-center mb-4 text-balance">活動記録</h1>
                        <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">Lilacのこれまでの活動をご紹介します</p>
                    </div>
                </section>

                <section className="container py-16">
                    <div className="space-y-8">
                        {activities.map((activity, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="md:flex">
                                    <div className="md:w-2/5">
                                        <img src={activity.image || "/placeholder.svg"} alt={activity.title} className="w-full h-64 md:h-full object-cover" />
                                    </div>
                                    <div className="md:w-3/5">
                                        <CardHeader>
                                            <div className="flex items-center gap-4 mb-2 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="h-4 w-4" />
                                                    <span>{activity.date}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Users className="h-4 w-4" />
                                                    <span>{activity.participants}名参加</span>
                                                </div>
                                            </div>
                                            <CardTitle className="text-2xl">{activity.title}</CardTitle>
                                            <CardDescription className="text-base leading-relaxed mt-2">{activity.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="space-y-2">
                                                <p className="text-sm font-semibold">プレイしたゲーム:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {activity.games.map((game, gameIndex) => (
                                                        <Badge key={gameIndex} variant="secondary">
                                                            {game}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>
            </main>

            <SiteFooter />
        </div>
    );
}
