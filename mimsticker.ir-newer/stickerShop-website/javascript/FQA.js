const body = document.body;

class fqa {
  question;
  answer;
  questionParagraph;
  answerParagraph;
  questionNo;

  constructor(question, answer, questionNo) {
    this.question = question;
    this.answer = answer;
    this.questionNo = questionNo;
  }

  writeQuestionToHTML() {
    this.questionParagraph = document.createElement("p");
    this.questionParagraph.classList.add("questionNo" + this.questionNo);
    this.questionParagraph.classList.add("fqaQuestion");
    this.questionParagraph.setAttribute("id", "questionNo" + this.questionNo);
    this.questionParagraph.innerText = this.question;
  }

  writeAnswerToHTML() {
    this.answerParagraph = document.createElement("p");
    this.answerParagraph.classList.add("answerNo" + this.questionNo);
    this.answerParagraph.classList.add("fqaAnswer");
    this.answerParagraph.setAttribute("id", "answerNo" + this.questionNo);
    this.answerParagraph.innerText = this.answer;
  }
  print() {
    alert(this.question);
  }
}

const fqaNo1 = new fqa(
  "چند روز بعد از ثبت سفارش استیکر ها ارسال میشن؟",
  "بسته به زمان ثبت سفارش بین 3 تا 9 روز کاری بعد سفارشتون ارسال میشه و کد رهگیری 24 رقمی پستی خدمتتون پیامک میشه",
  1
);
const fqaNo2 = new fqa(
  "چند روز زمان میبره تا استیکر ها به دستمون برسند؟",
  "وابسته به موقعیت سکونتتون در کشور، بین 3 تا 8 روز کاری بعد از ارسال کد رهگیری 24 رقمی، بستتون به دستتون میرسه به طور کلی، با توجه به زمان انتظار آماده سازی قبل از ارسال، بین 6 تا 17 روز استیکر ها به دستتون می رسند.",
  2
);
const fqaNo3 = new fqa(
  "اگه استیکر ها رو پشت قاب گوشی بچسبونیم که به طور مداوم دست باهاش برخورد می‌کنه مشکلی پیش نمیاد؟",
  "خیر، تمامی استیکر ها مقاوم در برابر هرگونه تعریق و سایش های سطحی هستند و لایه لمینت پوشاننده رویه آنها از خط و خش های جزئی جلوگیری می‌کند.",
  3
);
const fqaNo4 = new fqa(
  "میشه استیکر ها رو بعد از یک بار چسبوندن جابه جا کرد؟",
  "بله، درصورتی که استیکر ها رو در جایی کاملا تمیز و فاقد آلودگی چسبانده باشید می‌توانید با احتیاط آن را جابه‌جا کنید. البته توجه داشته باشید که چسبندگی آن مانند بار اول بالا نیست اما هنوز از چسبندگی قابل قبولی برخوردار است.",
  4
);
const fqaNo5 = new fqa(
  "بعضی اوقات توی استفاده مداوم و برخورد مکرر با دست، لبه های ظریف تر، لایه لمینت اون بلند میشه، اون موقع چیکار کنیم؟",
  "شما می توانید به آرامی لایه لمینت را جدا کرده و از خود استیکر در ادامه استفاده کنید.",
  5
);
const fqaNo6 = new fqa(
  "طرح های دلخواه خودمون هم میتونیم سفارش بدیم؟",
  "بله، به طور کلی طرح های انتخابیتون باید دارای کیفیت و وضوح مطلوب باشند و بعد از تایید توسط تیم پشتیبانی فرآیند چاپ و ارسال آنها صورت می‌گیرد.",
  6
);
const fqaNo7 = new fqa(
  "استیکر ها با قیچی برش خوردن؟",
  "خیر، استیکر ها با کاتر پلاتر، با دقت بسیار بالا و تمام اتوماتیک برش خورده اند.",
  7
);
const fqaNo8 = new fqa(
  "درصورت عدم رضایت چیکار کنیم؟",
  "بعد از تحویل مرسوله در صورت عدم استفاده می‌توانید مرسوله خود را مرجوع کنید.",
  8
);
const fqaArray = [
  fqaNo1,
  fqaNo2,
  fqaNo3,
  fqaNo4,
  fqaNo5,
  fqaNo6,
  fqaNo7,
  fqaNo8,
];

let article = document.createElement("article");
let fqaHeading = document.createElement("h3");
fqaHeading.classList.add("fqaHeading");
fqaHeading.setAttribute("id", fqaHeading);
fqaHeading.innerText = "سوالات پرتکرار";
article.append(fqaHeading);

for (i = 0; i < fqaArray.length; i++) {
  fqaArray[i].writeQuestionToHTML();
  fqaArray[i].writeAnswerToHTML();
  article.append(fqaArray[i].questionParagraph);
  article.append(fqaArray[i].answerParagraph);
}

body.append(article);
