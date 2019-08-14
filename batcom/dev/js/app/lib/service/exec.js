exec = {
    handler: class {
        constructor(views) {
            this.views = views;
        }

        render(page, callback = null) {
            this.update(page);
            callback !== null ? callback() : null;
        }

        update(page) {
            if (this.exists(page)) {
                for (let view of this.views) {
                    view === page ? this.show(view) : this.hide(view);
                    this.currentPage = page;
                }
            }
        }

        show(elm) {
            if (this.exists(elm)) {
                $(`#${elm}`).css("display", "block");
            }
        }

        hide(elm) {
            if (this.exists(elm)) {
                $(`#${elm}`).css("display", "none");
            }
        }

        toggle(elm, classname) {
            if (this.exists(elm)) {
                $(`#${elm}`).toggleClass(classname);
            }
        }

        exists(element) {
            if (!$(`#${element}`).length) {
                return console.log(`Error: Element/page "${element}" not found in index.html. Make sure that you spelled its ID right`);
            } else {
                return true;
            }
        }

        toggleBtn(active, elements, className) {
            for (let element of elements) {
                element === active ? $(`#${element}`).addClass(className) : $(`#${element}`).removeClass(className);
            }
        }
    },

    component: class {
        constructor(name, events = null, vars = null) {
            this.name = name;
            this.vars = vars;
            this.events = events;
            this.me = this.name;
            this.myelement = $(`#${this.name}`);

            this.vars !== null ? this.initVars() : null;
            this.events !== null ? this.initEvents() : null;
        }

        initVars() {
            for (let v in this.vars) {
                this[v] = this.vars[v];
            }
        }

        initEvents() {
            this.eventList = Object.keys(this.events);

            for (let event of this.eventList) {
                $(`#${this.name}`).on(event, () => {
                    this.events[event](this.myelement, this.me)
                });
            }
        }
    },

    populator: class {
        populate(page, productArr, callback = null) {

            $('.product').remove();

            this.currentList = productArr;

            app.render(page, () => {
                for (let product of productArr) {
                    $("#productsContainer").append(`<div class="product" onclick="popper.expandProduct(${product.id})"> <div class="imageContainer"> <img src="${product.images[0]}"> </div> <p class="title">${product.title}</p> <p class="price">${product.price}$</p> <p class="undertitle">${product.specs}</p> <p class="rating">Rating</p> <div class="ratingC"><div class="ratingB" style="width: ${product.score}0%;"></div></div><p class="ratingText">${product.score}/10</p> <p class="stockText">${product.stock} left in stock</p> <div onclick="cart.notify(); event.stopPropagation();" class="addToCart">Add to cart</div> </div>`);
                }

                callback !== null ? callback() : null;
            });
        }

        sortBy(page, by, productArr, callback = null) {

            if (by === "Rating") {
                this.currentList = productArr.sort(function (a, b) {
                    return b.score - a.score
                });
                this.populate(page, this.currentList);
            } else if (by === "Price") {
                this.currentList = productArr.sort(function (a, b) {
                    return a.price - b.price
                });
                this.populate(page, this.currentList);
            }
            callback !== null ? callback() : null;
        }

        populateByType(type, page, productArr) {
            this.currentList = productArr.filter(product => (product.type === type));
            this.populate(page, this.currentList);
        }

        setState() {
            if ($(`#${sortBtn.name}`).val() !== "0") {
                this.sortBy("products", $(`#${sortBtn.name}`).val(), this.currentList);
            }
        }

        expandProduct(id) {
            function product() {
                return gpuList.find(x => x.id === id);
            }

            $("#locationStatus").html(`You are here: Home > <p onclick="popper.populate('products', gpuList)" class="lStatus">Graphics Cards</p> > ${product().title}`);
            $("#pdTitle").html(product().title);
            $("#pdUndertitle").html(product().specs);
            $("#ratingB").css("width", `${product().score}0%`);
            $("#ratingText").html(`${product().score}/10`);
            $("#pdStock").html(`${product().stock} left in stock`);
            $("#pdMore").html(product().description);

            $('.pdImage > img').remove();

            this.count = 0;
            for (let image of product().images) {
                if (this.count === 0) {
                    $(".pdImage").append(`<img id="${this.count}" class="shown" src="${image}"></img>`);
                    this.count++;
                } else {
                    $(".pdImage").append(`<img id="${this.count}" src="${image}"></img>`);
                    this.count++;
                }
            }
            this.count--;

            app.render("productDetails");
        }
    }
}
