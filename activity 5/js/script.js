(
    function()
{
    var data = [

        {
        name:'Path Intellisense',
        author: "Christian Kohler",
        description: "Visual Studio Code plugin that autocompletes filenames.",
       
        downloads:12326740 ,
        stars: 5,
        price:  "Free",
        selector: "p1"

        },
        {
            name:'CSS Peek',
            author: "Pranay Prakash",
           description: "Allow peeking to css ID and class strings as definitions from html files to respective CSS.",
           
            downloads:  5470461,
            stars: 3.5,
            price: "Free",
            
            selector: "p2" 
        }


    ];
    function Package(data)
    {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
     
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.price = data.price;
        this.selector = data.selector;
    
    
        this.getFormattedDownloads = function()
        {
            return this.downloads.toLocaleString();
        };
        this.getFormattedStars = function()
        {
            return this.stars.toLocaleString();
        };

    }
    var getTodaysDate = function()
    {
        var today = new Date();
        return today.toDateString();
    };
    var getEl = function(id)
    {
        return document.getElementById(id);

    };
    var writePackageInfo = function(package)
    {
        var selector = package.selector,
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        authEl = getEl(selector + "-author"),
        downEl = getEl(selector + '-downloads'),
        starsEl = getEl(selector + "-stars"),
        priceEl = getEl(selector + '-price');
        
        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
        priceEl.textContent = package.price;
        
    }
     dateEl = getEl('date');
     dateEl.textContent = getTodaysDate();

     var PathIntellisense = new Package(data[0]);
     writePackageInfo(PathIntellisense);

     var CSSPeek = new Package(data[1]);
     writePackageInfo(CSSPeek);

     



     



}()
)
