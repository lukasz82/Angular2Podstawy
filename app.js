(function(){

    var Component = ng.core.Component;
    var NgModule = ng.core.NgModule;
    var BrowserModule = ng.platformBrowser.BrowserModule;
    var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;
    var Class = ng.core.Class;

    var QuoteService = Class({
        constructor: function QuoteService (){
            this.quotes = quotes;
        },
        getRandomQuote: function()
        {
            var randomIndex = Math.floor(Math.random() * quotes.length);
            return this.quotes[randomIndex];
        }
    })


    var quotes = [
        {
            "line" : "cytat 1 ble ble ble",
            "author" : "Jam ci to napisał"
        },
        {
            "line" : "cytat 2 ble ble ble",
            "author" : "Łukasz"
        },
        {
            "line" : "cytat 3 ble ble ble",
            "author" : "Kasia"
        }
    ];

    var SecondComponent = Component({
        selector:'second',
        template: '<p><em>{{quote.line}}</em> , {{quote.author}}</p>'
    })
    .Class({
        constructor: [QuoteService, function SecondComponent (quoteService)
        {
            this.quote = quoteService.getRandomQuote();
        }]
    })

    var AppComponent = Component({
        selector: 'my-app',
        template: '<h1>Angulat 2.0 Hello World</h1>' +
                  '<second></second>' +
                  '<second></second>'

    })
    .Class({
        constructor:function AppComponent(){}
    });

    var AppModule = NgModule({
        imports: [BrowserModule],
        declarations: [AppComponent, SecondComponent],
        providers: [QuoteService],
        bootstrap: [AppComponent]
    })
    .Class({
        constructor: function(){}
    })

    platformBrowserDynamic().bootstrapModule(AppModule);

})();