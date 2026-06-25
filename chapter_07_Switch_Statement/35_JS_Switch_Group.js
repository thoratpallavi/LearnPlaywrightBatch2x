let browser = "Edge";


switch (browser) {
    case "chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project");
        break;

    case "Firfox":
        console.log("Mozilla project");
        break;
    case "Safari":
        console.log("Apple browser- use js engine");
        break;
    default:
        console.log("Unkown Browser");
}