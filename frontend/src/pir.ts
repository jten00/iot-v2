export class PIR {
    container: HTMLDivElement;
    constructor(container: HTMLDivElement) {
        this.container = container;
        this.setupRealData();
    }

    setupRealData() {
        const valueElement = document.createElement("div");
        this.container.appendChild(valueElement);

        const button = document.createElement("button");
        button.innerText = "Get data";
        button.addEventListener("click", () => {
            const API_URL = "http://20.238.121.237/api/status";
            fetch(API_URL)
                .then(response => response.text())
                .then(data => {
                    const value = parseInt(data, 10);
                    valueElement.innerText = `PIR sensor triggered ${value} times`;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        });
        this.container.appendChild(button);
    }
}