const gp_name = [
    ["モーニング娘。", "mm"],
    ["モーニング娘。'14~'25", "mm2"],
    ["スマイレージ", "sm"],
    ["アンジュルム", "ag"],
    ["Juice=Juice", "jj"],
    ["カントリー・ガールズ", "cg"],
    ["こぶしファクトリー", "kf"],
    ["つばきファクトリー", "tf"],
    ["BEYOOOOONDS", "by"],
    ["OCHA NORMA", "oc"],
    ["ロージークロニクル", "rs"]
];

const gp = [
    [], // 0: モーニング娘。
    [   // 1: モーニング娘。'14~'25
        ["笑顔の君は太陽さ","0164.mp3","mm2"],
        ["君の代わりは居やしない","0165.mp3","mm2"],
        ["What is LOVE?","0166.mp3","mm2"],
        ["時空を超え 宇宙を超え","0167.mp3","mm2"],
        ["Password is 0","0168.mp3","mm2"],
        ["TIKI BUN","0169.mp3","mm2"],
        ["シャバダバ ドゥ〜","0172.mp3","mm2"],
        ["見返り美人","0173.mp3","mm2"],
        ["明日を作るのは君","0174.mp3","mm2"],
        ["キラリと光る星","0175.mp3","mm2"],
        ["恋人には絶対に知られたくない真実","0176.mp3","mm2"],
        ["私は私なんだ","0177.mp3","mm2"],
        ["笑えない話","0178.mp3","mm2"],
        ["大人になれば 大人になれる","0179.mp3","mm2"],
        ["青春小僧が泣いている","0180.mp3","mm2"],
        ["夕暮れは雨上がり","0181.mp3","mm2"],
        ["イマココカラ","0182.mp3","mm2"],
        ["Oh my wish!","0183.mp3","mm2"],
        ["スカッとMy Heart","0184.mp3","mm2"],
        ["今すぐ飛び込む勇気","0185.mp3","mm2"],
        ["冷たい風と片思い","0186.mp3","mm2"],
        ["ENDLESS SKY","0187.mp3","mm2"],
        ["One and Only","0188.mp3","mm2"],
        ["泡沫サタデーナイト!","0189.mp3","mm2"],
        ["The Vision","0190.mp3","mm2"],
        ["Tokyoという片隅","0191.mp3","mm2"],
        ["セクシーキャットの演説","0192.mp3","mm2"],
        ["ムキダシで向き合って","0193.mp3","mm2"],
        ["そうじゃない","0194.mp3","mm2"],
        ["BRAND NEW MORNING","0195.mp3","mm2"],
        ["ジェラシージェラシー","0196.mp3","mm2"],
        ["モーニングみそ汁","0197.mp3","mm2"],
        ["Get you!","0198.mp3","mm2"],
        ["邪魔しないで Here We Go!","0199.mp3","mm2"],
        ["弩級のゴーサイン","0200.mp3","mm2"],
        ["若いんだし!","0201.mp3","mm2"],
        ["ロマンスに目覚める妄想女子の歌","0202.mp3","mm2"],
        ["CHO DAI","0203.mp3","mm2"],
        ["私のなんにもわかっちゃない","0204.mp3","mm2"],
        ["Style of my love","0205.mp3","mm2"],
        ["ナルシス カマってちゃん協奏曲第5番","0206.mp3","mm2"],
        ["青春Say A-HA","0207.mp3","mm2"],
        ["もう 我慢できないわ〜Love ice cream〜","0208.mp3","mm2"],
        ["恋は時に","0209.mp3","mm2"],
        ["女子かしまし物語(モーニング娘。'17 Ver.)","0210.mp3","mm2"],
        ["愛の種(20th Anniversary Ver.)","0211.mp3","mm2"],
        ["WE ARE LEADERS! ～リーダーってのもつらいもの～","0212.mp3","mm2"],
        ["花が咲く 太陽浴びて","0213.mp3","mm2"],
        ["ENDLESS HOME","0214.mp3","mm2"],
        ["お天気の日のお祭り","0215.mp3","mm2"],
        ["五線譜のたすき","0216.mp3","mm2"]
    ],
    [   // 2: スマイレージ
        ["ぁまのじゃく","0111.mp3","sm"],
        ["あすはデートなのに、今すぐ声が聞きたい","0112.mp3","sm"],
        ["スキちゃん","0113.mp3","sm"],
        ["オトナになるって難しい！！！","0114.mp3","sm"],
        ["夢見る 15歳","0115.mp3","sm"],
        ["サンキュ！ クレームブリュレの友情","0116.mp3","sm"],
        ["○○ がんばらなくてもええねんで！！","0117.mp3","sm"],
        ["スマイル美人","0118.mp3","sm"],
        ["同じ時給で働く友達の美人ママ","0119.mp3","sm"],
        ["ショートカット","0120.mp3","sm"],
        ["パン屋さんのアルバイト","0121.mp3","sm"],
        ["恋にBooing ブー！","0122.mp3","sm"],
        ["初恋の貴方へ","0123.mp3","sm"],
        ["有頂天LOVE","0124.mp3","sm"],
        ["自転車チリリン","0125.mp3","sm"],
        ["タチアガール","0126.mp3","sm"],
        ["スマイル音丼","0127.mp3","sm"],
        ["プリーズ ミニスカ ポストウーマン！","0128.mp3","sm"],
        ["こんにちは こんばんは","0129.mp3","sm"],
        ["チョトマテクダサイ！","0130.mp3","sm"],
        ["チャンス到来！","0131.mp3","sm"],
        ["ドットビキニ","0132.mp3","sm"],
        ["すまいるブルース","0133.mp3","sm"],
        ["好きよ、純情反抗期。","0134.mp3","sm"],
        ["寒いね。","0135.mp3","sm"],
        ["私、ちょいとカワイイ裏番長","0136.mp3","sm"],
        ["旅立ちの春が来た","0137.mp3","sm"],
        ["どうしよう","0138.mp3","sm"],
        ["新しい私になれ！","0139.mp3","sm"],
        ["ヤッタルチャン","0140.mp3","sm"],
        ["ええか！？","0141.mp3","sm"],
        ["「良い奴」","0142.mp3","sm"],
        ["ミステリーナイト！","0143.mp3","sm"],
        ["エイティーン エモーション","0144.mp3","sm"],
        ["嗚呼 すすきの","0145.mp3","sm"],
        ["地球は今日も愛を育む","0146.mp3","sm"],
        ["踊ろうよ","0147.mp3","sm"],
        ["女ばかりの日曜日","0148.mp3","sm"],
        ["シューティング スター","0149.mp3","sm"],
        ["学級委員長","0150.mp3","sm"],
        ["しっかりしてよ！もう","0151.mp3","sm"],
        ["オトナになるって難しい！！！","0152.mp3","sm"],
        ["黄色い自転車とサンドウィッチ","0153.mp3","sm"],
        ["新・日本のすすめ！","0154.mp3","sm"],
        ["大人の途中","0155.mp3","sm"],
        ["天真爛漫","0156.mp3","sm"],
        ["私の心","0157.mp3","sm"],
        ["夕暮れ 恋の時間","0158.mp3","sm"],
        ["ねぇ 先輩","0159.mp3","sm"],
        ["さよなら さよなら さよなら","0160.mp3","sm"]
    ],
    [   // 3: アンジュルム
        ["大器晩成","0001.mp3","ag"],
        ["乙女の逆襲","0002.mp3","ag"],
        ["七転び八起き","0003.mp3","ag"],
        ["臥薪嘗胆","0004.mp3","ag"],
        ["魔法使いサリー","0005.mp3","ag"],
        ["出すぎた杭は打たれない","0006.mp3","ag"],
        ["ドンデンガエシ","0007.mp3","ag"],
        ["わたし","0008.mp3","ag"],
        ["次々続々","0009.mp3","ag"],
        ["糸島Distance","0010.mp3","ag"],
        ["恋ならとっくに始まってる","0011.mp3","ag"],
        ["上手く言えない","0012.mp3","ag"],
        ["愛のため今日まで進化してきた人間 愛のためすべて退化してきた人間","0013.mp3","ag"],
        ["忘れてあげる","0014.mp3","ag"],
        ["愛さえあればなんにもいらない","0015.mp3","ag"],
        ["ナミダイロノケツイ","0016.mp3","ag"],
        ["魔女っ子メグちゃん","0017.mp3","ag"],
        ["マナーモード","0018.mp3","ag"],
        ["キソクタダシクウツクシク","0019.mp3","ag"],
        ["君だけじゃないさ...friends","0020.mp3","ag"],
        ["涙は蝶に変わる","0021.mp3","ag"],
        ["カクゴして！","0022.mp3","ag"],
        ["マリオネット37℃","0023.mp3","ag"],
        ["汗かいてカルナバル","0024.mp3","ag"],
        ["交差点","0025.mp3","ag"],
        ["友よ","0026.mp3","ag"],
        ["泣けないぜ…共感詐欺","0161.mp3","ag"],
        ["Uraha=Lover","0162.mp3","ag"],
        ["君だけじゃないさ...friends(2018アコースティックVer.)","0163.mp3","ag"]
    ],
    [   // 4: Juice=Juice
        ["私が言う前に抱きしめなきゃね","0079.mp3","jj"],
        ["五月雨美女がさ乱れる","0080.mp3","jj"],
        ["天まで登れ！","0081.mp3","jj"],
        ["ロマンスの途中","0082.mp3","jj"],
        ["イジワルしないで 抱きしめてよ","0083.mp3","jj"],
        ["初めてを経験中","0084.mp3","jj"],
        ["裸の裸の裸のKISS","0085.mp3","jj"],
        ["アレコレしたい！","0086.mp3","jj"],
        ["ブラックバタフライ","0087.mp3","jj"],
        ["風に吹かれて","0088.mp3","jj"],
        ["背伸び","0089.mp3","jj"],
        ["伊達じゃないよ うちの人生は","0090.mp3","jj"],
        ["Wonderful World","0091.mp3","jj"],
        ["Ça va ? Ça va ?(サヴァサヴァ)","0092.mp3","jj"],
        ["Next is you!","0093.mp3","jj"],
        ["カラダだけが大人になったんじゃない","0094.mp3","jj"],
        ["Dream Road〜心が躍り出してる〜","0095.mp3","jj"],
        ["KEEP ON 上昇志向！！","0096.mp3","jj"],
        ["明日やろうはバカやろう","0097.mp3","jj"],
        ["地団駄ダンス","0098.mp3","jj"],
        ["Feel!感じるよ","0099.mp3","jj"],
        ["Fiesta! Fiesta!","0100.mp3","jj"],
        ["Goal〜明日はあっちだよ〜","0101.mp3","jj"],
        ["CHOICE & CHANCE","0102.mp3","jj"],
        ["愛・愛・傘","0103.mp3","jj"],
        ["生まれたてのBaby Love","0104.mp3","jj"],
        ["選ばれし私達","0105.mp3","jj"],
        ["GIRLS BE AMBITIOUS","0106.mp3","jj"],
        ["愛のダイビング","0107.mp3","jj"],
        ["チクタク 私の旬","0108.mp3","jj"],
        ["未来へ、さあ走り出せ！","0109.mp3","jj"],
        ["続いていくSTORY","0110.mp3","jj"]
    ],
    [   // 5: カントリー・ガールズ
        ["愛おしくってごめんね","0066.mp3","cg"],
        ["恋泥棒","0067.mp3","cg"],
        ["わかっているのにごめんね","0068.mp3","cg"],
        ["ためらい サマータイム","0069.mp3","cg"],
        ["ブギウギLOVE","0070.mp3","cg"],
        ["恋はマグネット","0071.mp3","cg"],
        ["ランラルン〜あなたに夢中〜","0072.mp3","cg"],
        ["どーだっていいの","0073.mp3","cg"],
        ["涙のリクエスト","0074.mp3","cg"],
        ["Good Boy Bad Girl","0075.mp3","cg"],
        ["ピーナッツバタージェリーラブ","0076.mp3","cg"],
        ["小生意気ガール","0077.mp3","cg"],
        ["書いては消しての “I Love You”","0078.mp3","cg"]
    ],
    [   // 6: こぶしファクトリー
        ["ドスコイ！ケンキョにダイタン","0027.mp3","kf"],
        ["ラーメン大好き小泉さんの唄","0028.mp3","kf"],
        ["念には念（念入りVer.）","0029.mp3","kf"],
        ["桜ナイトフィーバー","0030.mp3","kf"],
        ["チョット愚直に！猪突猛進","0031.mp3","kf"],
        ["押忍！こぶし魂","0032.mp3","kf"],
        ["サンバ！こぶしジャネイロ","0033.mp3","kf"],
        ["バッチ来い青春！","0034.mp3","kf"],
        ["オラはにんきもの","0035.mp3","kf"],
        ["シャララ！やれるはずさ","0036.mp3","kf"],
        ["エエジャナイカ ニンジャナイカ","0037.mp3","kf"],
        ["闇に抜け駆け","0038.mp3","kf"],
        ["ピッチピチトモダッチ","0039.mp3","kf"],
        ["急がば回れ","0040.mp3","kf"],
        ["未熟半熟トロトロ","0041.mp3","kf"],
        ["懸命ブルース","0042.mp3","kf"],
        ["残心","0043.mp3","kf"],
        ["サバイバー","0044.mp3","kf"],
        ["TEKI","0045.mp3","kf"],
        ["GO TO THE TOP!!","0046.mp3","kf"],
        ["辛夷の花","0047.mp3","kf"],
        ["This is 運命 (こぶし2016Ver.)","0048.mp3","kf"],
        ["本気ボンバー！！","0049.mp3","kf"],
        ["恋の呪縛","0050.mp3","kf"],
        ["青春劇場","0051.mp3","kf"],
        ["かわいい彼","0052.mp3","kf"],
        ["一丁目ロック！","0053.mp3","kf"],
        ["ダディドゥデドダディ！","0054.mp3","kf"],
        ["これからだ！！","0170.mp3","kf"],
        ["明日テンキになあれ！","0171.mp3","kf"]
    ],
    [   // 7: つばきファクトリー
        ["青春まんまんなか！","0055.mp3","tf"],
        ["気高く咲き誇れ！","0056.mp3","tf"],
        ["初恋サンライズ","0057.mp3","tf"],
        ["Just Try!","0058.mp3","tf"],
        ["うるわしのカメリア","0059.mp3","tf"],
        ["就活センセーション","0060.mp3","tf"],
        ["笑って","0061.mp3","tf"],
        ["ハナモヨウ","0062.mp3","tf"],
        ["低温火傷","0063.mp3","tf"],
        ["春恋歌","0064.mp3","tf"],
        ["I Need You ～夜空の観覧車～","0065.mp3","tf"]
    ],
    [   // 8: BEYOOOOONDS
        // Add BEYOOOOONDS songs here
    ],
    [   // 9: OCHA NORMA
        // Add OCHA NORMA songs here
    ],
    [   // 10: ロージークロニクル
        // Add ロージークロニクル songs here
    ]
];

// Export the data for use in Node.js
module.exports = { gp_name, gp };