const tugasPengguna = document.getElementById("AktivitasHarian");
const tombolInput = document.getElementById("tombolInput");
const daftarTugas = document.getElementById("tasklist");
const daftarSelesai = document.getElementById("daftar_selesai");

tombolInput.addEventListener("click", function() {
    const simpanTugas = tugasPengguna.value.trim();

    if (simpanTugas === "") {
        tugasPengguna.focus();
        return;
    }

    const itemTugas = document.createElement("li");
    const teksTugas = document.createElement("span");
    teksTugas.textContent = simpanTugas;

    const checklistSelesai = document.createElement("input");
    checklistSelesai.type = "checkbox";
    checklistSelesai.setAttribute("aria-label", `Tandai ${simpanTugas} sebagai selesai`);
    checklistSelesai.addEventListener("change", function() {
        if (!checklistSelesai.checked) {
            return;
        }

        const yakinSelesai = window.confirm("Apakah tugas ini beneran ingin dihapus?");
        if (yakinSelesai) {
            itemTugas.removeChild(checklistSelesai);
            daftarSelesai.appendChild(itemTugas);
        } else {
            checklistSelesai.checked = false;
        }
    });

    itemTugas.append(teksTugas, checklistSelesai);
    daftarTugas.appendChild(itemTugas);

    tugasPengguna.value = "";
    tugasPengguna.focus();
});
