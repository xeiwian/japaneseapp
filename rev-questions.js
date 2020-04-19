const mongoose = require("mongoose");

const mongoDB = 'mongodb://localhost:27017/appdb';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

const models = require("./question/model");
const Question = models.Question;

Question.insertMany(
    [
        {
            type: "Emotion",
            content: "Cry => 泣く (naku)",
            question: "Cry",
            correctAnswer: "泣く (naku)",
            possibleAnswer: ["叫ぶ (sakebu)", "泣く (naku)", "欠伸 (akubi)"]
        },
        {
            type: "Emotion",
            content: "Laugh => 笑い (warai)",
            question: "Laugh",
            correctAnswer: "笑い (warai)",
            possibleAnswer: ["興奮した (kōfun shita)", "驚き (odoroki)", "笑い (warai)"]
        },
        {
            type: "Emotion",
            content: "Excited => 興奮した (kōfun shita)",
            question: "Excited",
            correctAnswer: "興奮した (kōfun shita)",
            possibleAnswer: ["微笑 (bishou)", "嬉しい (ureshii)", "興奮した (kōfun shita)"]
        },
        {
            type: "Emotion",
            content: "Scared => 怖い (kowai)",
            question: "Scared",
            correctAnswer: "怖い (kowai)",
            possibleAnswer: ["心配する (shinpai suru)", "神経質 (shinkeishitsu)", "怖い (kowai)"]
        },
        {
            type: "Emotion",
            content: "Shout => 叫ぶ (sakebu)",
            question: "Shout",
            correctAnswer: "叫ぶ (sakebu)",
            possibleAnswer: ["怖い (kowai)", "叫ぶ (sakebu)", "怒り (ikari)"]
        },
        {
            type: "Emotion",
            content: "Embarassed => 恥ずかしい (hazukashī)",
            question: "Embarassed",
            correctAnswer: "恥ずかしい (hazukashī)",
            possibleAnswer: ["驚き (odoroki)", "動揺 (dōyō)", "恥ずかしい (hazukashī)"]
        },
        {
            type: "Emotion",
            content: "Relieved => ほっとした (hotto shita)",
            question: "Relieved",
            correctAnswer: "ほっとした (hotto shita)",
            possibleAnswer: ["ほっとした (hotto shita)", "リラックス (rirakkusu)", "穏やか (odayaka)"]
        },
        {
            type: "Emotion",
            content: "Worried => 心配する (shinpai suru)",
            question: "Worried",
            correctAnswer: "心配する (shinpai suru)",
            possibleAnswer: ["心配する (shinpai suru)", "不安な (fuan'na)", "混乱した (konran shita)"]
        },
        {
            type: "Emotion",
            content: "Lonely => 寂しい (sabishī)",
            question: "Lonely",
            correctAnswer: "寂しい (sabishī)",
            possibleAnswer: ["退屈 (taikutsu)", "寂しい (sabishī)", "悲しい (kanashī)"]
        },
        {
            type: "Family",
            content: "Uncle => おじさん (ojisan)",
            question: "Uncle",
            correctAnswer: "おじさん (ojisan)",
            possibleAnswer: ["おじさん (ojisan)", "お父さん (otōsan)", "祖父 (sofu)"]
        },
        {
            type: "Family",
            content: "Brother => 兄弟 (kyōdai)",
            question: "Brother",
            correctAnswer: "兄弟 (kyōdai)",
            possibleAnswer: ["いとこ (itoko)", "兄弟 (kyōdai)", "義兄弟 (gikyōdai)"]
        },
        {
            type: "Family",
            content: "Cousin => いとこ (itoko)",
            question: "Cousin",
            correctAnswer: "いとこ (itoko)",
            possibleAnswer: ["甥 (oi)", "いとこ (itoko)", "姪 (mei)"]
        },
        {
            type: "Family",
            content: "Child => 子供 (kodomo)",
            question: "Child",
            correctAnswer: "子供 (kodomo)",
            possibleAnswer: ["子供 (kodomo)", "赤ちゃん (akachan)", "子供達 (kodomodachi)"]
        },
        {
            type: "Family",
            content: "Parents => 両親 (ryoushin)",
            question: "Parents",
            correctAnswer: "両親 (ryoushin)",
            possibleAnswer: ["カップル (kappuru)", "夫婦 (fūfu)", "両親 (ryoushin)"]
        },
        {
            type: "Family",
            content: "Son => 息子 (musuko)",
            question: "Son",
            correctAnswer: "息子 (musuko)",
            possibleAnswer: ["姪 (mei)", "子供 (kodomo)", "息子 (musuko)"]
        },
        {
            type: "Family",
            content: "Daughter => 娘 (musume)",
            question: "Daughter",
            correctAnswer: "娘 (musume)",
            possibleAnswer: ["息子 (musuko)", "娘 (musume)", "子供 (kodomo)"]
        },
        {
            type: "Family",
            content: "Aunt => 叔母 (obasan)",
            question: "Aunt",
            correctAnswer: "叔母 (obasan)",
            possibleAnswer: ["叔母 (obasan)", "母親 (haha-ue)", "祖母 (sobo)"]
        },
        {
            type: "Family",
            content: "Relatives => 親戚 (shinseki)",
            question: "Relatives",
            correctAnswer: "親戚 (shinseki)",
            possibleAnswer: ["親 (oya)", "家族 (kazoku)", "親戚 (shinseki)"]
        },
        {
            type: "Food",
            content: "Breakfast => 朝ごはん (asa gohan)",
            question: "Breakfast",
            correctAnswer: "朝ごはん (asa gohan)",
            possibleAnswer: ["朝ごはん (asa gohan)", "晩ごはん (ban gohan)", "晩餐 (bansan)"]
        },
        {
            type: "Food",
            content: "Cuisine => 料理 (ryōri)",
            question: "Cuisine",
            correctAnswer: "料理 (ryōri)",
            possibleAnswer: ["食物 (shokumotsu)", "料理 (ryōri)", "食事 (shokuji)"]
        },
        {
            type: "Food",
            content: "Japanese food => 日本食 (nipponshoku)",
            question: "Japanese food",
            correctAnswer: "日本食 (nipponshoku)",
            possibleAnswer: ["洋食 (yōshoku)", "中華料理 (chūkaryōri)", "日本食 (nipponshoku)"]
        },
        {
            type: "Food",
            content: "Coffee => コーヒー (kōhī)",
            question: "Coffee",
            correctAnswer: "コーヒー (kōhī)",
            possibleAnswer: ["ミルク (miruku)", "お茶 (ocha)", "コーヒー (kōhī)"]
        },
        {
            type: "Food",
            content: "Beef => 牛肉 (gyūniku)",
            question: "Beef",
            correctAnswer: "牛肉 (gyūniku)",
            possibleAnswer: ["牛肉 (gyūniku)", "鶏肉 (toriniku)", "豚肉 (butaniku)"]
        },
        {
            type: "Food",
            content: "Green tea => 緑茶 (ryokucha)",
            question: "Green tea",
            correctAnswer: "緑茶 (ryokucha)",
            possibleAnswer: ["紅茶 (kōcha)", "お茶 (ocha)", "緑茶 (ryokucha)"]
        },
        {
            type: "Food",
            content: "Apple => 林檎 (ringo)",
            question: "Apple",
            correctAnswer: "林檎 (ringo)",
            possibleAnswer: ["オレンジ (orenji)", "ぶどう (budō)", "林檎 (ringo)"]
        },
        {
            type: "Food",
            content: "Milk => ミルク (miruku)",
            question: "Milk",
            correctAnswer: "ミルク (miruku)",
            possibleAnswer: ["チーズ (chīzu)", "ミルク (miruku)", "ヨーグルト (yōguruto)"]
        },
        {
            type: "Food",
            content: "Chocolate => チョコレート (chokoreeto)",
            question: "Chocolate",
            correctAnswer: "チョコレート (chokoreeto)",
            possibleAnswer: ["チョコレート (chokoreeto)", "クッキー (kukkī)", "ケーキ (kēki)"]
        }
    ],
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Questions inserted');
        }
        mongoose.disconnect()
        process.exit(0);
    }
);