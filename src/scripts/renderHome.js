export const renderHome = () => {
  return `
      <span class="section-badge">Από το 1998 στην καρδιά της πόλης</span>
      
      <h1>Welcome to Chris's Restaurant</h1>
      
      <p class="section-lead">
        Experience the finest dining with our exquisite menu and exceptional service.
      </p>
      
      <p class="section-sub">
        Φρέσκα, τοπικά υλικά και συνταγές που περνούν από γενιά σε γενιά — 
        κάθε πιάτο φτιαγμένο με προσοχή, κάθε επίσκεψη μια εμπειρία.
      </p>
    
      <div class="section-actions">
        <button class="btn-primary" data-view="menu">Δες το Μενού</button>
        <button class="btn-secondary" data-view="contact">Κράτηση Τραπεζιού</button>
      </div>
    
      <div class="section-stats">
        <div class="stat">
          <span class="stat-number">25+</span>
          <span class="stat-label">Χρόνια Εμπειρίας</span>
        </div>
        <div class="stat">
          <span class="stat-number">40+</span>
          <span class="stat-label">Πιάτα στο Μενού</span>
        </div>
        <div class="stat">
          <span class="stat-number">4.9★</span>
          <span class="stat-label">Βαθμολογία Πελατών</span>
        </div>
      </div>
    `;
};
