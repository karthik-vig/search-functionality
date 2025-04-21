
function search(searchText: String, bankDetails: String[]): boolean[] {
    const result: boolean[] = [];
    const searchTerms = searchText.toLowerCase().split(" ");
    const numberOfSearchTerms = searchTerms.length;
    for (const bankDetail of bankDetails) {
        let searchMatchCounter = 0;
        for (const searchTextComponent of searchTerms) {
            if (bankDetail.toLowerCase().includes(searchTextComponent)) {
                searchMatchCounter += 1;
            }
        }
        if (searchMatchCounter === numberOfSearchTerms) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
}

function main() {
    let searchText = '';
    for (let idx = 2; idx < process.argv.length; idx++) {
        searchText += `${process.argv[idx]} `;
    }
    console.log(`The search text is: ${searchText}`);
    // this contains information in the format of:
    // {customer name} {bank name} {last four of bank account}
    const bankDetails = [
        'John Doe Bank of America ****6789',
        'Jane Doe JPMorgan Chase ****7766 ',
        'Marshal Dave Midwest Bank ****4598',
        'Joe Hogan Gardener Bank ****3256',
        'Greata Joe Midwest Bank ****5423',
    ];
    const searchResults = search(searchText, bankDetails);
    searchResults.forEach((result, idx) => result? console.log(bankDetails[idx]) : '');
}

main();