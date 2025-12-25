AOS.init({ duration: 1200, once: true });

function checkPassword() {
    const pass = document.getElementById('passInput').value;
    if (pass.trim() === "23/7/2025") {
        document.getElementById('lock-screen').style.transform = 'translateY(-100%)';
        setTimeout(() => {
            document.getElementById('lock-screen').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
            document.getElementById('bgMusic').play().catch(e => console.log("Interaction required for music"));
        }, 1000);
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}

function openLetter() {
    document.querySelector('.letter-container').classList.toggle('open');
}

function toggleMusic() {
    const music = document.getElementById('bgMusic');
    music.paused ? music.play() : music.pause();
}

// دالة العداد المحدثة بالثواني
function updateCountdown() {
    const nextYear = new Date('January 1, 2026 00:00:00').getTime();
    const now = new Date().getTime();
    const diff = nextYear - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000); // حساب الثواني

    const timerElement = document.getElementById('timer');
    if (timerElement) {
        timerElement.innerHTML = `
                    <div>${days} يوم</div>
                    <div>${hours} ساعة</div>
                    <div>${mins} دقيقة</div>
                    <div>${secs} ثانية</div>
                `;
    }
    if (diff <= 0) {
        document.getElementById('timer').innerHTML = `<div>🎉  بدأت سنتنا الجديده ي مزتي 😘 🎉</div>`;
        return;
    }


}


const messages = [
    "أحبك اليوم أكثر من أمس 💖",
    "أنتِ سبب ابتسامتي 😊",
    "قلبي ملكك فقط ❤️",
    "لو قصيتي شعرك هنفخك✨",
    "هاي مزتي 🌹",
    "وجودك يدفئ أيامي 🔥",
    "خلي بالك من رسمتي 😍",
    "أنتِ ملكة قلبي 👑",
    "حبي لك لا ينتهي ♾️",
    "كل يوم أحبك أكثر 💞",
    "خلي بالك من هديتي دي انا تعبان فيها ❤️",
    "معك الدنيا أحلى 🌸",
    " انا جعان ي مزتي🥹",
    "أنتِ أمنيتي الجميلة ✨",
    "كل لحظة بدونك ناقصة 💕",
    "ضحكتك تغني عن أي كلمات 😍",
    "أنتِ الفرح في حياتي 🌹",
    "مفيش حضن كدا ولا بوسه تدفيني ف الجو دا ي بنوتي💓",
    "أنتِ الأمان والحنان 🌟",
    "كل ثانية معك ذكرى جميلة ⏳",
    "بردو مش عايزه تديني بوسه 😘",
    "أنتِ ضوء أيامي المظلمة 🌞",
    "متسهريش كتير .بشوفك فاتحه بالليل💖",
    "نو تويست نو ريدبول ❤️",
    "يوم جديد لاجمل ام يوسف ف الدنيا💕",
    "كل يوم أحبك أكثر وأكثر 🥰",
    "نينينينيني 🌸",
    "أنتِ سبب كل سعادتي 🌟",
    "بجبككككك ي كتكوتي ",
    "تقلي ع نفسك ي بنوتي متخففيش ف الشتا دي ❤️"
];

function showDailyMessage() {
    const startDate = new Date(2025, 6, 23); // 23/7/2025
    const now = new Date();
    const diffDays = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
    const index = diffDays % messages.length; // يظهر رسالة جديدة كل يوم بشكل دائري
    document.getElementById("message").innerText = messages[index];
}

showDailyMessage();
setInterval(showDailyMessage, 1000 * 60 * 60); // تحديث كل ساعة فقط لضمان الرسالة اليومية


function updateLoveCounter() {
    const startDate = new Date(2025, 6, 23, 0, 0, 0); // 23/7/2025 (الشهر يبدأ من 0)
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const diffMs = now - startDate;
    const totalSeconds = Math.floor(diffMs / 1000);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600) % 24;

    document.getElementById("loveTimer").innerHTML = `
        <div>${years} سنة</div>
        <div>${months} شهر</div>
        <div>${days} يوم</div>
        <div>${hours} ساعة</div>
        <div>${minutes} دقيقة</div>
        <div>${seconds} ثانية</div>
    `;
}

setInterval(updateLoveCounter, 1000);
updateLoveCounter();

setInterval(updateCountdown, 1000); // تحديث كل ثانية

// -------------------------------------------------------------------------------------------------------
// منع كليك يمين
document.addEventListener("contextmenu", e => e.preventDefault());

// منع اختصارات Inspect و View Source
document.addEventListener("keydown", function (e) {

    // F12
    if (e.keyCode === 123) {
        e.preventDefault();
        return false;
    }

    // Ctrl+Shift+I / J / C
    if (e.ctrlKey && e.shiftKey &&
        (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
        e.preventDefault();
        return false;
    }

    // Ctrl+U (View Source)
    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        return false;
    }
});

(function () {
    let devtoolsOpen = false;

    setInterval(() => {
        const start = performance.now();
        debugger;
        const end = performance.now();

        if (end - start > 100) {
            devtoolsOpen = true;
            document.body.innerHTML = "<h1 style='color:red;text-align:center;margin-top:20%'>Access Denied</h1>";
        }
    }, 1000);
})();

// منع النسخ والقص واللصق
document.addEventListener("copy", e => e.preventDefault());
document.addEventListener("cut", e => e.preventDefault());
document.addEventListener("paste", e => e.preventDefault());

// منع Ctrl + C / X / V / A
document.addEventListener("keydown", function (e) {

    if (e.ctrlKey && (
        e.keyCode === 67 || // C
        e.keyCode === 88 || // X
        e.keyCode === 86 || // V
        e.keyCode === 65    // A
    )) {
        e.preventDefault();
        return false;
    }
});



