# 🚀 Facebook Marketplace AutoClicker  

⚠️ **DIRTY TOOL FOR FACEBOOK POWER USERS!** ⚠️  
Tired of clicking like a peasant? **Automate Facebook Marketplace sharing** with this powerful **AutoClicker**!  
**No more manual clicking – just run and let the chaos unfold!** 😈  

## 🎥 Demo  
<img src="https://i.imgur.com/mH1eAG7.gif" width="600" />

## 🔥 Features  
✅ **Auto-selects all checkboxes** (only unticked ones)  
✅ **Automatically scrolls down** until all options are selected  
✅ **Simulates real user clicks** to bypass bot detection  
✅ **Ultra-fast execution** – done in seconds!  
✅ **Console log output: "DONE ✅"** when finished  

## 🛠️ Installation  
1. **Open Facebook Marketplace** and go to the **"Share to Groups/Places"** dialog.  
2. **Open your browser console** (Press `F12` → Click on **Console**).  
3. **Copy & paste** the script below and hit **Enter**.  
4. **Enjoy the magic! 🎩✨**  

## 🚀 Script  
```js
setTimeout(() => {
    function scrollAndClick() {
        let checkboxes = document.querySelectorAll('div[role="checkbox"]');
        let unchecked = Array.from(checkboxes).filter(c => c.getAttribute('aria-checked') !== 'true');

        if (unchecked.length === 0) {
            console.log('%c DONE ✅', 'color: lime; font-size: 16px; font-weight: bold;');
            return;
        }

        unchecked.forEach(checkbox => {
            let rect = checkbox.getBoundingClientRect();
            let eventOptions = { bubbles: true, cancelable: true, view: window, clientX: rect.left + rect.width / 2, clientY: rect.top + rect.height / 2 };

            checkbox.dispatchEvent(new MouseEvent('mousemove', eventOptions));
            checkbox.dispatchEvent(new MouseEvent('click', eventOptions));
        });

        unchecked[unchecked.length - 1].scrollIntoView({ behavior: 'smooth', block: 'center' });

        setTimeout(scrollAndClick, 500);
    }

    scrollAndClick();
}, 500);
