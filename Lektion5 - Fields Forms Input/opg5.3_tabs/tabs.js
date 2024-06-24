document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('h2 span');
    const content = document.querySelectorAll('h1');

    // Funktion til at skjule alle tabs og vise den valgte
    function selectTab(index) {
        content.forEach((item, idx) => {
            item.style.display = idx === index ? 'block' : 'none';
        });
    }

    // Tilføj event listeners til alle spans (tabs)
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            selectTab(index);
        });
    });

    // Vis den første tab fra starten
    selectTab(0);
});
