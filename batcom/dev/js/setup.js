const paths = {
    jquery: "vendor/jQuery3.4.1",
    exec: "app/lib/service/exec",
    pL: "app/productList"
}

requirejs.config({
    baseUrl: "js/",
    paths: paths
});

requirejs(Object.keys(paths),
function   () {
    requirejs(["app/lib/service/components"], ()=>{
        requirejs(["app/app"]);
    });
});