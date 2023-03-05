function btn(title, cls, onClick) {
    let btn = document.createElement('a');
    btn.className = "btn " + cls;
    btn.textContent = title;
    btn.onclick = onClick;

    return btn;
}

function windowComp(level) {
    let win = document.createElement('div');
    win.className = "window"
    win.id = "win-" + level;
    win.style.width = "calc(90vw - (" + level + " * 40px)"
    win.style.height = "calc(90vh - (" + level + " * 40px)"

    return win;
}

function openWindow(level) {
    let childLevel = level + 1;
    let childWin = windowComp(childLevel);
    let actionSize = 55;
    let actions = document.createElement('div');

    actions.id = "action-" + childLevel;
    actions.className = "actions";
    if (window.innerWidth/actionSize > childLevel &&
        window.innerHeight/actionSize > childLevel) {
            actions.appendChild(
                btn("Open", "primary", () => {openWindow(childLevel);}));
    }
    actions.appendChild(
        btn("Close", "danger", () => {closeWindow(childLevel);}));
    childWin.appendChild(actions);

    let win = document.getElementById("win-" + level);
    let action = document.getElementById("action-" + level);
    action.classList.add("hide");
    win.appendChild(childWin);
}

function closeWindow(level) {
    let win = document.getElementById("win-" + level);
    let action = document.getElementById("action-" + (level - 1));
    action.classList.remove("hide");
    win.remove();
}
