

const Main = imports.ui.main;
let monitorsChangedEvent = null;
let itemList = ["activities", "appMenu"]

function hideItems() {
    itemList.forEach(element => {
        let i = Main.panel.statusArea[element];
        i ? i.hide() : null;
    });
}

function showItems() {
    itemList.forEach(element => {
        let i = Main.panel.statusArea[element];
        i ? i.show() : null;
    });
}

function hideIndicator() {
    hideItems();
}

function enable() {
    monitorsChangedEvent = Main.layoutManager.connect('monitors-changed', hideIndicator);
    hideIndicator();
}

function disable() {
    Main.layoutManager.disconnect(monitorsChangedEvent);
    showItems();
}
