//   {free: true, url: "", text: "", summary: ""},

var categories = [
    {   id: 600,
        category: "Personal",
        urls: [
            {free: true, url: "https://calendar.google.com/calendar", text: "Google", summary: "Calendar"}
        ]
    },
    {   id: 650,
        category: "Python",
        urls: [
            {free: true, url: "http://docs.python-guide.org/en/latest/writing/structure/?highlight=import", text: "Hitchhiker's Guide to Python", summary: "Structure your project"},
            {free: true, url: "http://learnpythonthehardway.org/book/index.html",  text: "Learning Python the Hard Way", summary: "Table of contents"}
        ]
    },
    {   id: 500,
        category: "ASNA" ,
        urls: [
            {free: true, url: "https://asnaeu.crm4.dynamics.com/main.aspx#947445431", text: "CRM", summary: "CRM"},
            {free: true, url: "http://outlook.office365.com/", text: "Email", summary: "Email"},
            {free: true, url: "https://app.asana.com/0/30252059916997/30252059916997", text: "ASANA", summary: "To-dos"},
            {free: true, url: "https://asna.com/us/tech/kb/doc", text: "ASNA.com", summary: "TechHub"},
            {free: true, url: "http://www-03.ibm.com/certify/partner/pub/zz/index.shtml", text: "IBM Partnerworld", summary:""},
            {free: true, url: "https://asnainc.bamboohr.com/login.php", text: "ASNA Bamboo", summary:""}
        ]
    },
    {   id: 400,
        category: "Entertainment" ,
        urls: [
            {free: false, url: "https://www.siriusxm.com/player/", text: "Music", summary: "SiriusXM"},
            {free: false, url: "http://www.rifftrax.com/", text: "Videos", summary: "RiffTrax"}
        ]
    },
    {   id: 200,
        category: "GitHub repos" ,
        urls: [
            {free: true, url: "https://gist.github.com/rogerpence", text: "Github gists", summary: "rp"},
            {free: true, url: "https://github.com/jrnickell?tab=repositories", text: "Github", summary: "John Nickell"},
            {free: true, url: "https://github.com/rogerpence?tab=repositories", text: "Github", summary: "Roger Pence"},
            {free: true, url: "https://github.com/novuso?tab=repositories", text: "Github", summary: "Novuso"},
            {free: true, url: "https://github.com/ASNA?tab=repositories", text: "Github", summary: "ASNA"},
            {free: true, url: "https://github.com/ASNApalooza?tab=repositories", text: "Github", summary: "ASNApalooza"}
        ]
    },
    {   id: 100,
        category: "Linux/Ubuntu" ,
        urls: [
            {free: true, url: "http://permissions-calculator.org/", text: "Linux permission calculator", summary: "Calculate octal value for Linux file system permissions"},
            {free: true, url: "https://gist.githubusercontent.com/rogerpence/d1c79afbe157a02ffb1f/raw/fbf1085e08d314d2ebeae6a396c298a02f8207b7/Bash%2520header", text: "Bash scripting", summary: "Bash script header"}
        ]
    },
    {
        id: 1,
        category: "Web documentation/reference" ,
        urls: [
            {free: true, url: "http://www.redbooks.ibm.com/", text: "IBM Redbooks", summary: "IBM technical documentation and reference"},
            {free: true, url: "http://www-01.ibm.com/support/knowledgecenter/ssw_ibm_i_71/rzahg/icmain.htm", text: "IBM Info Center", summary: "IBM Info Center"},
            {free: true, url: "https://developer.mozilla.org/en-US", text: "Mozilla Developer Network", summary: "HTML/JavaScript/CSS documentation"},
            {free: true, url: "http://www.webplatform.org/", text: "WebPlatform", summary: "HTML/JavaScript/CSS documentation "},
            {free: true, url: "https://www.owasp.org/index.php/Main_Page", text: "OWASP", summary: "Website sercurity information"},
            {free: true, url: "http://msdn.microsoft.com/en-us/library/gg145045%28v=vs.110%29.aspx", text: "Microsoft .NET Framework Class Library", summary: ""},
            {free: true, url: "http://tools.ietf.org/html/rfc7230", text: "RFC 7230 Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing", summary: ""},
            {free: true, url: "http://tools.ietf.org/pdf/rfc7230.pdf", text: "RFC 7230 Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing as PDF", summary: ""},
            {free: true, url: "http://tools.ietf.org/html/rfc7231", text: "RFC 7231 Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content", summary: ""},
            {free: true, url: "http://tools.ietf.org/pdf/rfc7231.pdf", text: "RFC 7231 Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content as PDF", summary: ""},
            {free: true, url: "http://tools.ietf.org/html/rfc7232", text: "RFC 7232 Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests", summary: ""},
            {free: true, url: "http://tools.ietf.org/pdf/rfc7232.pdf", text: "RFC 7232 Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests PDF", summary: ""},
            {free: true, url: "http://tools.ietf.org/html/rfc7233", text: "RFC 7233 Hypertext Transfer Protocol (HTTP/1.1): Range Requests", summary: ""},
            {free: true, url: "http://tools.ietf.org/pdf/rfc7233.pdf", text: "RFC 7233 Hypertext Transfer Protocol (HTTP/1.1): Range Requests PDF", summary: ""},
            {free: true, url: "http://tools.ietf.org/html/rfc7234", text: "RFC 7234 Hypertext Transfer Protocol (HTTP/1.1): Caching", summary: ""},
            {free: true, url: "http://tools.ietf.org/pdf/rfc7234.pdf", text: "RFC 7234 Hypertext Transfer Protocol (HTTP/1.1): Caching as PDF", summary: ""},
            {free: true, url: "http://tools.ietf.org/html/rfc7235", text: "RFC 7235 Hypertext Transfer Protocol (HTTP/1.1): Authentication", summary: ""},
            {free: true, url: "http://tools.ietf.org/pdf/rfc7235.pdf", text: "RFC 7235 Hypertext Transfer Protocol (HTTP/1.1): Authentication as PDF", summary: ""}
        ]
    },
    {   id: 2,
        category: "Code/Frameworks" ,
        urls: [
            {free: true, url: "http://sass-lang.com/", text: "Sass", summary: "CSS precompiler"},
            {free: true, url: "http://compass-style.org/", text: "Compass", summary: "CSS precompiler"},
            {free: true, url: "http://html5boilerplate.com/", text: "HTML5 Boilerplate", summary: "Best-practice HTML5 template"},
            {free: true, url: "http://getbootstrap.com/", text: "Bootstrap", summary: "CSS Framework"},
            {free: true, url: "http://fortawesome.github.io/Font-Awesome/", text: "Font Awesome", summary: "Icons-as-SVG library"},
            {free: true, url: "http://jquery.com/", text: "jQuery", summary: "JavaScript library"},
            {free: true, url: "http://jqueryui.com/", text: "jQuery UI", summary: "JavaScript UI library"},
            {free: true, url: "http://jquerymobile.com/", text: "jQuery Mobile", summary: "JavaScript mobile UI library"},
            {free: true, url: "http://underscorejs.org/", text: "Underscore", summary: "Superb JavaScript utility library"},
            {free: true, url: "http://backbonejs.org/", text: "Backbone", summary: "MVCish-like library for JavaScript"},
            {free: true, url: "http://momentjs.com/", text: "Moment.js", summary: "JavaScript time library"},
            {free: true, url: "http://marionettejs.com/", text: "Marionette", summary: "Composite app library for BackBone"},
            {free: true, url: "http://numeraljs.com/", text: "Numeral.js", summary: "JavaScript numeric formatting library"},
            {free: true, url: "http://bower.io/", text: "Bower", summary: "Package manager for JavaScript"},
            {free: true, url: "http://www.datatables.net/", text: "jQuery DataTables", summary: "Client-side GridView replacement"},
            {free: true, url: "http://rubyinstaller.org/", text: "RubyInstaller for Windows", summary: "Ruby language Windows"},
            {free: true, url: "http://nodejs.org/", text: "node.js", summary: "Node.JS language for Windows"},
            {free: true, url: "http://nodejs.org/", text: "node.js", summary: "Node.JS language for Windows"},
            {free: true, url: "http://logging.apache.org/log4net/", text: "Log4net", summary: "Logger for .NET apps"},
            {free: true, url: "https://github.com/ifightcrime/bootstrap-growl/blob/master/jquery.bootstrap-growl.js", text: "Bootstrap-growl", summary: "Growl-type messages for Bootstap"},
            {free: true, url: "http://getfuelux.com/index.html", text: "Fuel UX", summary: "Bootstrap extension library"}
        ]
    },
    {   id: 3,
        category: "Windows utilities" ,
        urls: [
            {free: true, url: "http://www.voidtools.com/", text: "Everything", summary: "File search utility--find any file fast"},
            {free: true, url: "http://www.fileseek.ca/", text: "FileSeek", summary: "Find any file with text quickly"},
            {free: true, url: "http://www.launchy.net/", text: "Launchy", summary: "App launcher that Win8 should have"},
            {free: true, url: "http://ajaxmin.codeplex.com/", text: "AjaxMin", summary: "MS's JaveScript/CSS minifier"},
            {free: true, url: "https://filezilla-project.org/", text: "FileZilla", summary: "Windows FTP client"},
            {free: true, url: "http://www.7-zip.org/", text: "7-Zip", summary: "Windows zip utility "},
            {free: true, url: "https://chocolatey.org/", text: "Chocolatey", summary: "Windows utilities package manager"},
            {free: true, url: "http://sourceforge.net/projects/console/", text: "Console2", summary: "DOS command line alternative"},
            {free: true, url: "http://git-scm.com/", text: "Command line Git client for Windows", summary: "Trust us! The command line is your friend!"},
            {free: true, url: "https://windows.github.com/", text: "GitHub for Windows", summary: "Git source control client for Windows"},
            {free: true, url: "http://www.telerik.com/fiddler", text: "Fiddler", summary: "HTTP traffic analyzer"},
            {free: true, url: "https://www.wireshark.org/", text: "WireShark", summary: "When Fiddler isn't enough"},
            {free: true, url: "https://lastpass.com/", text: "LastPass", summary: "Password utility"},
            {free: true, url: "http://www.dropbox.com", text: "Dropbox", summary: "Shared storage"},
            {free: true, url: "http://drive.google.com", text: "Google Drive", summary: "Shared storage"},
            {free: true, url: "https://onedrive.live.com/about/en-us/", text: "MS OneDrive", summary: "Shared storage"},
            {free: true, url: "http://winmerge.org/", text: "WinMerge", summary: "Windows file compare utility"},
            {free: true, url: "http://www.getpaint.net", text: "Paint.NET", summary: "MS Paint alternative"}
        ]
    },
    {   id: 4,
        category: "Text editors" ,
        urls: [
            {free: false, url: "http://www.sublimetext.com/", text: "Sublime Text", summary: "Our all-time favorite! Don't leave home without it!"},
            {free: true, url: "https://sublime.wbond.net/", text: "Sublime Text Package Control", summary: "One of the reasons Sublime is our favorite"},
            {free: true, url: "http://notepad-plus-plus.org/", text: "NotePad++", summary: "If you can't afford Sublime"},
            {free: true, url: "https://www.jetbrains.com/webstorm/", text: "WebStorm", summary: "JetBrains HTML/JavaScript/CSS IDE"},
            {free: true, url: "https://atom.io", text: "GitHub Atom", summary: "HTML-based,  Node.JS-driven editor. Not ready for prime,  but coming along."},
            {free: false, url: "http://brackets.io/?lang=en", text: "Adobe Brackets", summary: "HTML-based,  Node.JS-driven editor. Not ready for prime,  but coming along."}
        ]
    },
    {   id: 5,
        category: "Browser plugins" ,
        urls: [
            {free: true, url: "http://chrispederick.com/work/web-developer/", text: "Web Developer", summary: "Web developer tools for Chrome and Firefox"},
            {free: true, url: "http://www.getpostman.com/", text: "Postman", summary: "Rest test client "},
            {free: true, url: "https://addons.mozilla.org/en-US/firefox/addon/omnibar/", text: "Omnibar for FireFox", summary: "Integrates FireFox's URL and Search (as Kozmic Muffin intended)"}
        ]
    },
    {   id: 6,
        category: "Blogs" ,
        urls: [
            {free: true, url: "http://ibmsystemsmag.blogs.com/you_and_i/", text: "You and i blog", summary: "Steve Will's IBM i blog"},
            {free: true, url: "http://ibmsystemsmag.blogs.com/", text: "Jon Paris/Susan Gantner blog", summary: "IBM i technical content"},
            {free: true, url: "http://www.hanselman.com/blog/", text: "Scott Hanselman", summary: "The center of the MS developer universe"},
            {free: true, url: "http://www.wekeroad.com/", text: "Rob Conery", summary: "Opinionated,  but highly knowledgable"},
            {free: true, url: "http://css-tricks.com/", text: "CSS-Tricks", summary: "Great CSS tips and techniques"},
            {free: true, url: "http://www.smashingmagazine.com/", text: "Smashing Magazine", summary: "Web coding site"},
            {free: true, url: "http://alistapart.com/", text: "A List Apart", summary: "Web coding site"},
            {free: true, url: "http://www.sitepoint.com/", text: "Sitepoint", summary: "Web coding site"}
        ]
    },
    {   id: 300,
        category: "Blogs - rp" ,
        urls: [
            {free: true, url: "http://linuxclinix.com/ghost", text: "LinuxClinix", summary: "As admin"},
            {free: true, url: "http://linuxclinix.com/", text: "LinuxClinix", summary: "As user"},
            {free: true, url: "https://linuxclinixcom.disqus.com/admin/moderate/#/approved", text: "LinuxClinix", summary: "Moderate comments"},
            {free: true, url: "http://www.rogerpence.com", text: "RogerPence.com", summary: "As user"},
            {free: true, url: "http://www.rogerpence.com/admin", text: "RogerPence.com/admin", summary: "As admin"}
        ]
    },
    {   id: 7,
        category: "Websites" ,
        urls: [
            {free: true, url: "http://codebeautify.org/yaml-to-json-xml-csv", text: "Code Beautify", summary: "YAML converter"},
            {free: true, url: "http://www.yamllint.com/", text: "YAMLLint", summary: "YAML linter"},
            {free: true, url: "https://travis-ci.org", text: "Travis CI", summary: "Continuous integration"},
            {free: true, url: "https://workflowy.com", text: "WorkFlowy", summary: "Online outliner"},
            {free: true, url: "http://jsfiddle.net/", text: "JSFiddle", summary: "JavaScript tester/IDE"},
            {free: true, url: "http://www.jslint.com/", text: "JSLint", summary: "Test the quality of your JavaScript"},
            {free: true, url: "http://jsonlint.com/", text: "JSONLint", summary: "Test the quality of your Json"},
            {free: true, url: "http://www.motobit.com/util/base64-decoder-encoder.asp", text: "Base64", summary: "Online base64 encoder/decoder "},
            {free: true, url: "http://gpbmike.github.io/refresh-sf/", text: "Compressor", summary: "Online JavaScript/CSS compressor"},
            {free: true, url: "http://www.favicon.cc/", text: "Favicon Generator", summary: "Generate site favicons"},
            {free: true, url: "http://fa2png.io/", text: "Font Awesome to PNG", summary: "Translate a FontAwesome character to a PNG"},
            {free: true, url: "http://www.browserstack.com/", text: "BrowserStack", summary: "Online browser testing"},
            {free: true, url: "https://www.google.com/fonts", text: "Google Fonts", summary: "All the fonts you need"},
            {free: true, url: "http://www.fontsquirrel.com/", text: "FontSquirrel", summary: "All the fonts you need,  hey wait..."},
            {free: true, url: "https://color.adobe.com/", text: "Adobe Color CC (formerly Adobe Kuler)", summary: "Color combination advice/presets (that would even help Tim Daniels!)"},
            {free: true, url: "https://trello.com/", text: "Trello", summary: "Project manager "},
            {free: true, url: "https://en.todoist.com/", text: "Todoist", summary: "To-do list manager"},
            {free: true, url: "https://aggdata.com/", text: "AggData", summary: "Free and commercial databases"},
            {free: true, url: "http://converter.telerik.com/", text: "Telerik VB/C# converter", summary: "Convert VB.NET and C#"},
            {free: true, url: "http://jsbeautifier.org/", text: "JavaScript/HTML formatter", summary: "Reformat JavaScript and HTML"},
            {free: true, url: "https://developers.google.com/speed/libraries/", text: "Google Hosted Libraries", summary: "Google content delivery network"},
            {free: true, url: "http://www.danstools.com/", text: "Dan's Tools", summary: "Tons of useful Web dev tools"},
            {free: true, url: "http://permissions-calculator.org/", text: "Linux permission calculator", summary: "Calculate octal value for Linux file system permissions"},
            {free: true, url: "http://www.dirtymarkup.com/", text: "DirtyMarkup", summary: "HTML/JS/CSS prettyfier"},
            {free: true, url: "http://maps.cga.harvard.edu/gpf/", text: "Get current GEO position", summary: ""}
        ]
    },
    {   id: 8,
        category: "Learning" ,
        urls: [
            {free: true, url: "https://www.coursera.org/", text: "Coursera", summary: "Free online learning"},
            {free: false, url: "http://tutsplus.com/", text: "Tuts+", summary: "Online tutorials and videos"},
            {free: false, url: "https://www.codeschool.com/", text: "Code School", summary: "Online videos"},
            {free: true, url: "http://www.codecademy.com/", text: "Codecademy", summary: "Free interactive learning"},
            {free: false, url: "https://leanpub.com/", text: "Leanpub", summary: "The future of publishing and business cards!"},
            {free: false, url: "http://www.pluralsight.com/", text: "Pluralsight", summary: "Online tutorials and videos"}
        ]
    },
    {   id: 9,
        category: "Developer APIs" ,
        urls: [
            {free: true, url: "https://www.google.com/fonts", text: "Google Fonts", summary: "Font API"},
            {free: true, url: "https://developers.google.com/maps/", text: "Google Maps", summary: "Maps API"},
            {free: true, url: "https://developers.google.com/drive/", text: "Google Drive", summary: "Offline storage API"},
            {free: true, url: "https://developer.github.com/", text: "GitHub API", summary: "GitHub API"},
            {free: true, url: "https://developers.google.com/analytics/", text: "Google Analytics", summary: "Website traffic/analytics API"},
            {free: true, url: "http://www.dropbox.com", text: "Dropbox", summary: "Offline storage API"}
        ]
    },
    {   id: 10,
        category: "Git hosting" ,
        urls: [
            {free: true, url: "https://github.com/", text: "GitHub", summary: "Source control as Kozmic Muffin meant it to be"},
            {free: true, url: "https://bitbucket.org/", text: "Bitbucket", summary: "A good Git host"},
            {free: true, url: "https://gitlab.com/", text: "Gitlab", summary: "An open source Git host"}
        ]
    },
    {   id: 11,
        category: "DevOps" ,
        urls: [
            {free: false, url: "Https://www.digitalocean.com/", text: "Digital Ocean", summary: "VM hoster"},
            {free: true, url: "https://www.vagrantup.com/", text: "Vagrant", summary: "VM partition manager"},
            {free: true, url: "https://www.virtualbox.org/", text: "VirtualBox", summary: "VM manager"},
            {free: true, url: "http://jenkins-ci.org/", text: "Jenkins CI", summary: "Continuous integration"},
            {free: true, url: "https://travis-ci.org/", text: "Travis CI", summary: "Continuuous integration"}
        ]
    }
];
