// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_ID, _artTitle, _artist, _year, _medium) {
    const nftMetadata = {
        itemId: _ID,
        title: _artTitle,
        artist: _artist,
        year: _year,
        medium: _medium
    };
    NFTs.push(nftMetadata);
    console.log("Minted: " + _artTitle);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        console.log("\nID: " + NFTs[i].itemId);
        console.log("Title: " + NFTs[i].title);
        console.log("Artist: " + NFTs[i].artist);
        console.log("Year: " + NFTs[i].year);
        console.log("Medium: " + NFTs[i].medium);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFT's minted: " + NFTs.length);
}

// call your functions below this line
mintNFT("art001", "Starry Night", "Vincent van Gogh", 1889, "Oil on canvas");
mintNFT("art002", "The Persistence of Memory", "Salvador Dalí", 1931, "Oil on canvas");
mintNFT("art003", "The Scream", "Edvard Munch", 1893, "Oil, tempera, and pastel on cardboard");
mintNFT("art004", "Girl with a Pearl Earring", "Johannes Vermeer", 1665, "Oil on canvas");
mintNFT("art005", "Mona Lisa", "Leonardo da Vinci", 1503, "Oil on poplar");

listNFTs();
getTotalSupply();
