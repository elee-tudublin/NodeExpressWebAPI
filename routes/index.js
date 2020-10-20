// Import router package
const router = require('express').Router();

/* Hand get requests for '/'
/* this is the index or home page
*/
router.get('/', function (req, res) {

    // Send a JSON response - this app will be a web api so no need to send HTML
    //res.end(JSON.stringify({message: 'This is the home page'}));
    res.json({content: 'This is the default route.'});

});

// Calculator
// Acccepts two paramters via the url querystring
// example: http://localhost:8080/calc?a=3&b=2

router.get('/calc', function (req, res) {

    // Declare variables
    let numA = "";
    let numB = "";

    // Validate input - important as a bad input could crash the server or lead to an attack
    // check that params exist, if they do assign their values to the variables
    if (typeof req.query.a != 'undefined')
        numA = req.query.a;

    if (typeof req.query.b != 'undefined')    
        numB = req.query.b;

    // See link to validator npm package (at top) for doc.
    // If validation fails return an error message
    if (!validator.isNumeric(numA, { no_symbols: true }) || !validator.isNumeric(numB, { no_symbols: true })) {
        res.statusMessage = "Bad Request";
        res.status(400).end();
        return false;
    }
    // Note paramters are passed as strings to convert to numbers
    const answer = Number(numA) + Number(numB);

    // Send a JSON response - this app will be a web api so no need to send HTML
    //res.end(JSON.stringify({message: 'This is the home page'}));
    res.json({answer: `${numA} + ${numB} = ${answer}`});

});



// export
module.exports = router;
