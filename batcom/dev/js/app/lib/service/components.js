// --- GLOBAL ---
const app = new exec.handler(["home", "products", "productDetails"]);
const popper = new exec.populator();

cart = {
    notify: (caller) => {
        caller === 1 ? $(`#cart`).removeClass("cartNotify") : $(`#cart`).addClass("cartNotify");
        caller === 1 ? $(`#cart2`).removeClass("cartNotify") : $(`#cart2`).addClass("cartNotify");
    }
};
// --- /// ---

// --- NAVBAR ---
const shoppingCart = new exec.component(
    "shoppingCart", 
    {
        click: () => {
            cart.notify(1);
        }
    }
);

const navCategoryBtn = new exec.component(
    "navCategoryBtn", 
    {
        click: (myelement, me) => {
            myelement.toggleClass("navCategoryEnabled");
            app.toggle("categoryBrowser", "navCategoryShow");
            app.toggle(blocker.name, "blockerShow");
        }
    }
);

const blocker = new exec.component(
    "blocker", 
    {
        click: (myelement, me) => {
            myelement.toggleClass("blockerShow");
            app.toggle(navCategoryBtn.name, "navCategoryEnabled");
            app.toggle("categoryBrowser", "navCategoryShow");
            $("#mSearchCon").removeClass("mobileSearchShow");
        }
    }
);

const gpuLink = new exec.component(
    "gpuLink", 
    {
        click: () => {
            app.toggleBtn("both", ["both", "nvidia", "amd"], "chosenPanel");
            popper.populate("products", gpuList);

            app.toggle(blocker.name, "blockerShow");
            app.toggle(navCategoryBtn.name, "navCategoryEnabled");
            app.toggle("categoryBrowser", "navCategoryShow");
        }
    }
);
// --- /// ---






// --- MOBILE NAVBAR ---
const navMmenu = new exec.component(
    "navMmenu",
    {
        click: () => {
            app.toggle("navMobileMenu", "navMshow");
            $("#mSearchCon").removeClass("mobileSearchShow");
            $("#"+blocker.name).removeClass("blockerShow");
        }
    }
);

const gpuLinkMobile = new exec.component(
    "gpuLinkMobile",
    {
        click: () => {
            app.toggleBtn("both", ["both", "nvidia", "amd"], "chosenPanel");
            popper.populate("products", gpuList);

            app.toggle("navMobileMenu", "navMshow");
        }
    }
);

const mSearch = new exec.component(
    "mSearch",
    {
        click: () => {
            app.toggle("mSearchCon", "mobileSearchShow");
            app.toggle(blocker.name, "blockerShow");
            $("#navMobileMenu").removeClass("navMshow");
        }
    }
);
// --- /// ---





// --- PRODUCTPAGE ---
const nvidiaBtn = new exec.component(
    "nvidia", 
    {
        click: (myelement, me) => {
            app.toggleBtn(me, [me, "amd", "both"], "chosenPanel");
            popper.populateByType(me, "products", gpuList);
            popper.setState();
        }
    }
);

const amdBtn = new exec.component(
    "amd", 
    {
        click: (myelement, me) => {
            app.toggleBtn(me, [me, "nvidia", "both"], "chosenPanel");
            popper.populateByType(me, "products", gpuList);
            popper.setState();
        }
    }
);

const bothBtn = new exec.component(
    "both", 
    {
        click: (myelement, me) => {
            app.toggleBtn(me, [me, "nvidia", "amd"], "chosenPanel");
            popper.populate("products", gpuList);
            popper.setState();
        }
    }
);

const sortBtn = new exec.component(
    "sort", 
    {
        change: (myelement, me) => {
            popper.sortBy("products", myelement.val(), popper.currentList);
        }
    }
);
// --- /// ---





// --- PRODUCTDETAILS ---
const arrowLeft = new exec.component(
    "arrowLeft", 
    {
        click: () => {
            let currentId = $(".shown").attr("id");
            if (Number($(".shown").attr("id")) !== 0) {
                $(`#${currentId}`).removeClass("shown");
                currentId--;
                $(`#${currentId}`).addClass("shown");
            }
        }
    }
);

const arrowRight = new exec.component(
    "arrowRight", 
    {
        click: () => {
            let currentId = $(".shown").attr("id");
            if (Number($(".shown").attr("id")) !== popper.count) {
                $(`#${currentId}`).removeClass("shown");
                currentId++;
                $(`#${currentId}`).addClass("shown");
            }
        }
    }
);

const pdQNumber = new exec.component(
    "pdQNumber", 
    {

    }, 
    {
        count: 0
    }
);

const pdQMinus = new exec.component(
    "pdQMinus", 
    {
        click: () => {
            if (pdQNumber.count !== 0) {
                pdQNumber.count--;
                pdQNumber.myelement.html(pdQNumber.count);
            }
        }
    }
);

const pdQAdd = new exec.component(
    "pdQAdd", 
    {
        click: () => {
            pdQNumber.count++;
            pdQNumber.myelement.html(pdQNumber.count);
        }
    }
);
// --- /// ---
