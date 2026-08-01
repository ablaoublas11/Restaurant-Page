export const renderContact = () => {
  return `
        <section class="contact">
            <span class="section-badge">Επικοινωνία</span>
            <h1>Επικοινωνήστε Μαζί Μας</h1>
            <p class="section-lead">
                Κάντε κράτηση ή στείλτε μας το μήνυμά σας — θα χαρούμε να σας εξυπηρετήσουμε.
            </p>

            <div class="contact-content">
                <div class="contact-info">
                <div class="info-item">
                    <span class="info-icon">📍</span>
                    <div>
                    <h4>Διεύθυνση</h4>
                    <p>Οδός Παραδείγματος 12, Θεσσαλονίκη</p>
                    </div>
                </div>
                <div class="info-item">
                    <span class="info-icon">📞</span>
                    <div>
                    <h4>Τηλέφωνο</h4>
                    <p>2310 123 456</p>
                    </div>
                </div>
                <div class="info-item">
                    <span class="info-icon">✉️</span>
                    <div>
                    <h4>Email</h4>
                    <p>info@chrisrestaurant.gr</p>
                    </div>
                </div>
                <div class="info-item">
                    <span class="info-icon">🕒</span>
                    <div>
                    <h4>Ώρες Λειτουργίας</h4>
                    <p>Καθημερινά 12:00 - 23:30</p>
                    </div>
                </div>
                </div>

                <form class="contact-form">
                <div class="form-group">
                    <label for="name">Ονοματεπώνυμο</label>
                    <input type="text" id="name" name="name" placeholder="Το όνομά σας" required />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="you@example.com" required />
                </div>
                <div class="form-group">
                    <label for="message">Μήνυμα</label>
                    <textarea id="message" name="message" rows="5" placeholder="Πώς μπορούμε να βοηθήσουμε;" required></textarea>
                </div>
                <button type="submit" class="btn-primary">Αποστολή Μηνύματος</button>
                </form>
            </div>
        </section>
    `;
};
