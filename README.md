# Financia - Professional Accounting Software

## 📋 Overview
**Financia** is a modern, feature-rich accounting application built with pure HTML, CSS, and JavaScript. It provides professional accounting tools for managing journal entries, ledgers, and financial reports with an intuitive glassmorphism UI design.

## ✨ Features

### 📊 **Core Accounting Features**
- **Journal Entry Management**: Create, view, and manage double-entry accounting transactions
- **General Ledger**: View account-specific transaction histories with running balances
- **Trial Balance**: Generate trial balance reports with automatic balancing verification
- **Financial Statements**:
  - Income Statement (Profit & Loss)
  - Balance Sheet (Assets, Liabilities & Equity)
- **Chart of Accounts**: Manage asset, liability, equity, revenue, and expense accounts

### 🎨 **User Interface Features**
- **Glassmorphism Design**: Modern UI with blurred glass effects and smooth animations
- **Dark/Light Theme**: Toggle between dark and light themes with persistent settings
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Interactive Calendar**: Visual transaction calendar with date-based filtering
- **Animated Sidebar**: Collapsible sidebar with hover effects and smooth transitions
- **Dashboard**: Financial overview with key metrics and pie charts

### 🔧 **Productivity Features**
- **Smart Account Suggestions**: Auto-complete for account names as you type
- **Account Creation Modal**: Professional modal for creating new accounts on-the-fly
- **Export/Import**: Backup and restore data via JSON files
- **Print/Export**: Generate printable reports and export to Excel format
- **Search & Filter**: Search functionality across all modules
- **Transaction Calendar**: Visual calendar showing transactions by date
- **Keyboard Shortcuts**: Quick navigation and entry shortcuts

### 📈 **Data Visualization**
- **Interactive Pie Charts**: 
  - Balance Sheet breakdown (Assets vs Liabilities vs Equity)
  - Income Statement overview (Revenue vs Expenses)
- **Animated Dashboard Cards**: Key metrics with hover effects
- **Calendar Heatmap**: Visual indicator for days with transactions

## 🚀 Installation & Usage

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server or database required - runs entirely in browser

### Quick Start
1. Download or clone the repository
2. Open `financial.html` in your web browser
3. Start using immediately - all data is stored locally in your browser

### First-Time Setup
1. The app loads with default accounts (Cash, Bank, Accounts Payable, etc.)
2. Create your first journal entry:
   - Navigate to **Journal** section
   - Fill in date and description
   - Add at least one debit and one credit entry
   - Click "Save Journal Entry"

## 🏗️ Architecture

### Technology Stack
- **HTML5**: Semantic markup structure
- **CSS3**: Custom properties (CSS variables), Flexbox, Grid, animations
- **Vanilla JavaScript**: No external dependencies (except Chart.js for graphs)
- **Chart.js**: For financial data visualization
- **LocalStorage**: Persistent data storage in browser

### Data Structure
```javascript
{
  accounts: [
    { id: string, name: string, type: 'asset'|'liability'|'equity'|'revenue'|'expense'|'contra-asset' }
  ],
  journalEntries: [
    {
      id: string,
      date: 'YYYY-MM-DD',
      description: string,
      lines: [
        { accountId: string, debit: number, credit: number }
      ]
    }
  ],
  settings: {
    currency: string,
    darkTheme: boolean
  }
}
```

## 📁 File Structure
```
financia.html          # Main application file
├── HTML Structure
│   ├── Sidebar navigation
│   ├── Main content sections
│   └── Modal dialogs
├── CSS Styles
│   ├── Glassmorphism design system
│   ├── Responsive breakpoints
│   └── Dark/light theme variables
└── JavaScript Application
    ├── Data management (load/save)
    ├── Accounting logic
    ├── UI rendering functions
    └── Event handlers
```

## 🔑 Key Functions

### Data Management
- `load()`: Loads data from localStorage with backup recovery
- `save()`: Saves data to localStorage with backup protection
- `reload()`: Reloads data with corruption recovery

### Accounting Logic
- `computeTrial()`: Calculates trial balance from journal entries
- `buildLedger()`: Builds ledger with running balances
- `renderFinancialChart()`: Creates pie charts for financial visualization

### UI Components
- `showToast()`: Displays notification messages
- `showConfirm()`: Shows confirmation dialogs
- `showAccountTypeModal()`: Account creation modal
- `setupAccountInputs()`: Account suggestion system

## 💡 Usage Examples

### Creating a Journal Entry
1. Go to **Journal** section
2. Enter transaction date and description
3. Add account lines:
   - Type account name (auto-suggestions appear)
   - Enter amount
   - Select Debit (Dr) or Credit (Cr)
4. Ensure debits equal credits
5. Click "Save Journal Entry"

### Adding New Accounts
1. Go to **Accounts** section
2. Enter account name in the form
3. Select account type
4. Click "Add Account"

*Alternatively:* Type a new account name in journal entry form - a modal will prompt for account type.

### Generating Reports
1. **Trial Balance**: Navigate to Trial Balance section
2. **Income Statement**: Navigate to Income Statement, use period filters
3. **Balance Sheet**: Navigate to Balance Sheet, select date
4. **Export**: Use Print/Export dropdowns in each section

## 🔒 Data Security & Backup

### Local Storage
- Data persists in browser's localStorage
- Automatic backup system prevents data loss
- Data can be exported/imported via JSON files

### Backup Recommendations
1. Regularly use **Export Data (JSON)** from Accounts section
2. Store backup files securely
3. Use **Import Data** to restore from backups

## 🎨 Design System

### Color Palette
- **Primary**: `#0ea5e9` (Sky Blue)
- **Success**: `#10b981` (Emerald)
- **Warning**: `#f59e0b` (Amber)
- **Danger**: `#ef4444` (Red)
- **Backgrounds**: Glassmorphism effects with backdrop-filter

### Typography
- **Font Family**: Inter, system-ui stack
- **Scale**: Consistent typographic scale for headings
- **Weight**: Semantic use of font weights

### Animations
- **Transitions**: Smooth 300ms cubic-bezier transitions
- **Entrances**: Fade-in, slide-up animations
- **Hover Effects**: Subtle transforms and shadow changes

## 📱 Responsive Design

### Breakpoints
- **Desktop**: Full sidebar, grid layouts
- **Tablet**: Collapsed sidebar, adjusted grids
- **Mobile**: Single column, touch-friendly controls

### Mobile Optimizations
- Touch-friendly buttons and inputs
- Simplified navigation
- Optimized tables with horizontal scroll
- Reduced animations for performance

## 🔧 Browser Compatibility

### Supported Browsers
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Required Features
- CSS Grid and Flexbox
- CSS Custom Properties (variables)
- ES6 JavaScript
- LocalStorage API
- Backdrop-filter (for glass effects)

## 🚨 Error Handling & Validation

### Data Validation
- Journal entries must balance (debits = credits)
- Account names must be unique
- Date validation for all date inputs
- Numeric validation for amounts

### Error Recovery
- Automatic data backup on save
- Corruption detection and recovery
- Graceful fallbacks for missing features

## 📄 Printing & Exporting

### Print Features
- Optimized print stylesheets
- Removes UI elements for clean prints
- Page break control for multi-page reports

### Export Options
- **Excel Export**: Basic .xls format for all reports
- **JSON Export**: Full data backup
- **Print**: Browser print dialog for reports

## 🔄 Keyboard Shortcuts

### Journal Entry Shortcuts
- `Ctrl/Cmd + Enter`: Submit journal entry
- `Ctrl/Cmd + L`: Focus first account input
- `Enter` in amount field: Move to next line or submit
- `Escape`: Close suggestions/modals

### Navigation Shortcuts
- Use sidebar navigation for section switching
- Tab navigation for form controls

## 🐛 Troubleshooting

### Common Issues

1. **Data not saving**: Check browser storage permissions, try clearing browser cache
2. **Charts not displaying**: Ensure JavaScript is enabled, check Chart.js loading
3. **Slow performance**: Reduce number of journal entries, use filtering
4. **UI glitches**: Refresh page, check browser compatibility

### Debugging
- Open browser Developer Tools (F12)
- Check Console for error messages
- Verify localStorage contains `finledger_pro_v6` key

## 📈 Performance Considerations

### Optimizations
- Debounced search inputs
- Virtualized lists for large datasets
- Chart.js optimization for data updates
- Efficient DOM updates with selective rendering

### Limits
- LocalStorage limit (~5-10MB)
- Chart rendering performance with >1000 data points
- Browser memory with extremely large datasets

## 🔮 Future Enhancements

### Planned Features
- Multi-currency support
- User authentication
- Cloud synchronization
- Advanced reporting (cash flow, ratios)
- Receipt/image attachment
- Tax calculation modules
- Budgeting and forecasting tools

### Technical Improvements
- IndexedDB for larger datasets
- Service Worker for offline capability
- PWA installation support
- API integration with banking services

## 📚 Accounting Principles

### Double-Entry System
- Every transaction affects at least two accounts
- Total debits must equal total credits
- Accounts follow normal balance rules

### Account Types
- **Assets**: Debit increases, Credit decreases
- **Liabilities**: Credit increases, Debit decreases
- **Equity**: Credit increases, Debit decreases
- **Revenue**: Credit increases, Debit decreases
- **Expenses**: Debit increases, Credit decreases

## 🤝 Contributing

While this is a standalone application, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make improvements
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is provided as-is for educational and professional use. Modify and distribute as needed.

## 🙏 Acknowledgments

- **Chart.js** for data visualization
- **Inter font family** for typography
- Modern CSS techniques and glassmorphism design patterns
- Accounting principles and double-entry bookkeeping methodology

---

**Note**: This is a client-side application. for full app you should contact me. I'll reach you as soon as possible. Always maintain regular backups of your financial data.
mail me at: abulkalamripon09@gmail.com
