export const renderAbout = () => {
  const content = `
        <section class="about">
            <span class="section-badge">Η Ιστορία μας</span>
            <h1>Σχετικά με Εμάς</h1>
            <p class="section-lead">
                Από το 1998, φέρνουμε στο τραπέζι σας αυθεντική ελληνική κουζίνα με αγάπη και μεράκι.
            </p>

            <div class="about-content">
                <div class="about-text">
                <p>
                    Το Chris's Restaurant ξεκίνησε ως ένα μικρό οικογενειακό εστιατόριο στην καρδιά
                    της πόλης, με στόχο να μοιραστεί αυθεντικές ελληνικές γεύσεις που περνούν από
                    γενιά σε γενιά.
                </p>
                <p>
                    Κάθε πιάτο μας φτιάχνεται με φρέσκα, τοπικά υλικά, ακολουθώντας παραδοσιακές
                    συνταγές που τιμούν την ελληνική γαστρονομική κληρονομιά. Πιστεύουμε ότι το
                    καλό φαγητό φέρνει ανθρώπους κοντά, και αυτή η φιλοσοφία μας οδηγεί κάθε μέρα.
                </p>
                </div>

                <div class="about-features">
                <div class="feature-card">
                    <span class="feature-icon">🌿</span>
                    <h3>Φρέσκα Υλικά</h3>
                    <p>Επιλεγμένα καθημερινά από τοπικούς παραγωγούς.</p>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">📜</span>
                    <h3>Παραδοσιακές Συνταγές</h3>
                    <p>Οικογενειακές συνταγές με ιστορία δεκαετιών.</p>
                </div>
                <div class="feature-card">
                    <span class="feature-icon">❤️</span>
                    <h3>Φιλοξενία</h3>
                    <p>Κάθε επισκέπτης νιώθει σαν μέλος της οικογένειας.</p>
                </div>
                </div>
            </div>
        </section>
    `;

  //επιστρέφουμε το περιεχόμενο
  return content;
};
