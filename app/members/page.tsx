import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const members = [
  {
    name: "田中 太郎",
    role: "代表",
    favoriteGames: ["カタン", "アグリコラ", "ドミニオン"],
    bio: "ボードゲーム歴10年。戦略ゲームが大好きです。",
    image: "/smiling-person-portrait.png",
  },
  {
    name: "佐藤 花子",
    role: "副代表",
    favoriteGames: ["パンデミック", "コードネーム", "ディクシット"],
    bio: "協力ゲームとパーティーゲームが得意です。",
    image: "/woman-portrait-friendly.jpg",
  },
  {
    name: "鈴木 次郎",
    role: "メンバー",
    favoriteGames: ["カルカソンヌ", "チケット・トゥ・ライド", "宝石の煌き"],
    bio: "ファミリーゲームをみんなで楽しむのが好きです。",
    image: "/casual-man-portrait.png",
  },
  {
    name: "高橋 美咲",
    role: "メンバー",
    favoriteGames: ["ラブレター", "ワンナイト人狼", "ナンジャモンジャ"],
    bio: "短時間で盛り上がるゲームが大好き！",
    image: "/young-woman-portrait-happy.jpg",
  },
  {
    name: "伊藤 健太",
    role: "メンバー",
    favoriteGames: ["テラフォーミング・マーズ", "グレート・ウェスタン・トレイル", "ブラス"],
    bio: "重量級ゲームも楽しめます。戦略を考えるのが好きです。",
    image: "/man-portrait-glasses.png",
  },
  {
    name: "山本 さくら",
    role: "メンバー",
    favoriteGames: ["宝石の煌き", "スプレンダー", "アズール"],
    bio: "美しいコンポーネントのゲームに目がありません。",
    image: "/artistic-woman-portrait.png",
  },
]

export default function MembersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-secondary/30 py-16">
          <div className="container">
            <h1 className="text-5xl font-bold text-center mb-4 text-balance">メンバー紹介</h1>
            <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
              Lilacで活動している個性豊かなメンバーたちです
            </p>
          </div>
        </section>

        <section className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{member.name}</CardTitle>
                    <Badge variant="secondary">{member.role}</Badge>
                  </div>
                  <CardDescription className="leading-relaxed">{member.bio}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">好きなゲーム:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.favoriteGames.map((game, gameIndex) => (
                        <Badge key={gameIndex} variant="outline">
                          {game}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
