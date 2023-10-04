export const CleanPage = (container) => {
    container.innerHTML = " ";
}

export const LinkPage = (id, page) => {
    const link = document.querySelector(id);
    link.addEventListener("click", () => page());
 };
 

 export const insertDom = (id, element ) => {
    const dom = document.querySelector(id);
    dom.innerHTML = element()
 }

