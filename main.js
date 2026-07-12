// --- 1. Zabezpieczenia (Anty-DevTools) ---
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
    if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && [73, 74, 67].includes(e.keyCode)) || (e.ctrlKey && e.keyCode === 85)) {
        e.preventDefault();
    }
});

// --- 2. Konfiguracja Supabase ---
const supabase = supabase.createClient("https://emuwgpxohspbshcgethj.supabase.co/rest/v1/", "sb_publishable_LcgkID1zAKdRUufiG0umzg_e6ez0hX4");

// --- 3. Główna logika aplikacji ---
let items = [];
let isAdminAuthenticated = sessionStorage.getItem('bs_admin') === 'true';

async function fetchFromSupabase() {
    const { data } = await supabase.from('repository').select('*').order('date', { ascending: false });
    if (data) {
        items = data;
        displayRepo();
    }
}

function switchView(tabName) {
    // Logika przełączania widoków
}

// Reszta funkcji: processNewUpload, removeItem, displayRepo...

// Inicjalizacja
fetchFromSupabase();
