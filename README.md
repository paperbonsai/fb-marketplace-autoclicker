# 🚀 Facebook Marketplace AutoClicker  

⚠️ **DIRTY TOOL FOR FACEBOOK POWER USERS!** ⚠️  
Tired of clicking like a peasant? **Automate Facebook Marketplace sharing** with this powerful **AutoClicker**!  
**No more manual clicking – just run and let the chaos unfold!** 😈  

## 🎥 Demo  
![demo](./demo.gif)


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
// Facebook Marketplace Auto-Checkbox Clicker
(function() {
    let checkboxes = document.querySelectorAll('div[role="checkbox"]');
    let index = 0;

    function clickNext() {
        if (index >= checkboxes.length) {
            console.log("DONE ✅");
            return;
        }

        let checkbox = checkboxes[index];
        let isChecked = checkbox.getAttribute('aria-checked') === 'true';

        if (!isChecked) {
            checkbox.click();
        }

        index++;
        checkbox.scrollIntoView({ behavior: "smooth", block: "center" });

        setTimeout(clickNext, 200); // Adjust timing for smooth execution
    }

    clickNext();
})();
