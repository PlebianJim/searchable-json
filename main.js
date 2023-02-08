async function search() {
    const searchTerm = document.getElementById("searchTerm").value.toLowerCase();
    const response = await fetch("https://raw.githubusercontent.com/PlebianJim/searchable-json/main/spellList.json");
    const spells = await response.json();
    let spell = null;
    for (const key in spells) {
        if (key.toLowerCase() === searchTerm) {
            spell = spells[key];
            break;
        }
    }
    if (spell) {
        let tableHTML = `<table><tbody>`;
        for (const title in spell) {
            tableHTML += `<tr><td>${title}</td><td>${spell[title]}</td></tr>`;
        }
        tableHTML += `</tbody></table>`;
        document.getElementById("result").innerHTML = tableHTML;
    } else {
        document.getElementById("result").innerHTML = "Spell not found";
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("searchTerm").addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            search();
        }
    });
});