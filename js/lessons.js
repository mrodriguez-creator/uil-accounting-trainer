// =====================================================
// LESSONS MODULE
// 3 Complete Lessons with full content
// =====================================================

const lessons = {
    'account-classification': {
        title: 'Account Classification & DR/CR',
        subtitle: 'Beginner • 20 minutes',
        content: `
            <div class="lesson-section">
                <h3>🎯 What You'll Learn</h3>
                <ul class="feature-list">
                    <li>The 5 types of accounts in accounting</li>
                    <li>DEAD CORL - which accounts increase with debits vs credits</li>
                    <li>Normal balance for each account type</li>
                    <li>Real examples of each account type</li>
                </ul>
            </div>

            <div class="lesson-section">
                <h3>1️⃣ The Five Account Types</h3>
                <p>Every account in accounting falls into one of five categories:</p>
                <div class="example-box">
                    <h4>1. ASSETS</h4>
                    <p>Things the business OWNS that have value</p>
                    <p><strong>Examples:</strong> Cash in Bank, Supplies, Equipment, Accounts Receivable, Prepaid Insurance</p>
                </div>

                <div class="example-box">
                    <h4>2. LIABILITIES</h4>
                    <p>Things the business OWES to others</p>
                    <p><strong>Examples:</strong> Accounts Payable, Notes Payable, Salaries Payable, Unearned Revenue</p>
                </div>

                <div class="example-box">
                    <h4>3. OWNER'S EQUITY</h4>
                    <p>The owner's claim to the assets (what's left after paying debts)</p>
                    <p><strong>Examples:</strong> Owner, Capital | Owner, Drawing</p>
                    <p><strong>Formula:</strong> Assets = Liabilities + Owner's Equity</p>
                </div>

                <div class="example-box">
                    <h4>4. REVENUE</h4>
                    <p>Income earned from selling goods or services</p>
                    <p><strong>Examples:</strong> Sales, Fees Earned, Service Revenue, Interest Income</p>
                </div>

                <div class="example-box">
                    <h4>5. EXPENSES</h4>
                    <p>Costs of running the business</p>
                    <p><strong>Examples:</strong> Rent Expense, Salary Expense, Supplies Expense, Utilities Expense</p>
                </div>
            </div>

            <div class="lesson-section">
                <h3>2️⃣ DEAD CORL - Master This!</h3>
                <p>This acronym tells you which accounts INCREASE with debits vs credits:</p>
                <div class="dead-corl-grid">
                    <div class="dead-side">
                        <h4>DEAD = Debits ↑</h4>
                        <ul class="feature-list">
                            <li><strong>D</strong>rawing</li>
                            <li><strong>E</strong>xpenses</li>
                            <li><strong>A</strong>ssets</li>
                            <li><strong>D</strong>rawing (repeated for emphasis!)</li>
                        </ul>
                        <p style="margin-top:1rem;">💡 These accounts INCREASE with DEBITS</p>
                    </div>
                    <div class="corl-side">
                        <h4>CORL = Credits ↑</h4>
                        <ul class="feature-list">
                            <li><strong>C</strong>redits</li>
                            <li><strong>O</strong>wner's Equity</li>
                            <li><strong>R</strong>evenue</li>
                            <li><strong>L</strong>iabilities</li>
                        </ul>
                        <p style="margin-top:1rem;">💡 These accounts INCREASE with CREDITS</p>
                    </div>
                </div>
                <p><strong>Memory Tip:</strong> If it's in DEAD, debit it to increase it. If it's in CORL, credit it to increase it!</p>
            </div>

            <div class="lesson-section">
                <h3>3️⃣ Normal Balances</h3>
                <p>Each account type has a "normal balance" - the side it usually has a balance on:</p>
                <div class="example-box">
                    <h4>DEBIT Normal Balances (DEAD)</h4>
                    <ul class="feature-list">
                        <li>Assets = Debit balance</li>
                        <li>Expenses = Debit balance</li>
                        <li>Drawing = Debit balance</li>
                    </ul>
                </div>

                <div class="example-box">
                    <h4>CREDIT Normal Balances (CORL)</h4>
                    <ul class="feature-list">
                        <li>Liabilities = Credit balance</li>
                        <li>Owner's Equity = Credit balance</li>
                        <li>Revenue = Credit balance</li>
                    </ul>
                </div>
                <p>💡 <strong>Rule:</strong> The normal balance is always on the INCREASE side!</p>
            </div>

            <div class="lesson-section">
                <h3>4️⃣ Practice Examples</h3>
                <p>Let's classify these accounts:</p>

                <div class="example-box">
                    <h4>Cash in Bank</h4>
                    <p><strong>Type:</strong> Asset (we own it)</p>
                    <p><strong>Normal Balance:</strong> Debit (DEAD)</p>
                    <p><strong>Increases with:</strong> Debit</p>
                </div>

                <div class="example-box">
                    <h4>Accounts Payable</h4>
                    <p><strong>Type:</strong> Liability (we owe it)</p>
                    <p><strong>Normal Balance:</strong> Credit (CORL)</p>
                    <p><strong>Increases with:</strong> Credit</p>
                </div>

                <div class="example-box">
                    <h4>Sales</h4>
                    <p><strong>Type:</strong> Revenue (income earned)</p>
                    <p><strong>Normal Balance:</strong> Credit (CORL)</p>
                    <p><strong>Increases with:</strong> Credit</p>
                </div>

                <div class="example-box">
                    <h4>Rent Expense</h4>
                    <p><strong>Type:</strong> Expense (cost of business)</p>
                    <p><strong>Normal Balance:</strong> Debit (DEAD)</p>
                    <p><strong>Increases with:</strong> Debit</p>
                </div>

                <div class="example-box">
                    <h4>Owner, Capital</h4>
                    <p><strong>Type:</strong> Owner's Equity</p>
                    <p><strong>Normal Balance:</strong> Credit (CORL)</p>
                    <p><strong>Increases with:</strong> Credit</p>
                </div>
            </div>

            <div class="lesson-section">
                <h3>5️⃣ The Accounting Equation</h3>
                <p style="font-size:1.5rem; text-align:center; font-weight:bold; margin:2rem 0;">
                    Assets = Liabilities + Owner's Equity
                </p>
                <p>This equation MUST ALWAYS balance!</p>
                <div class="example-box">
                    <h4>Example:</h4>
                    <p>If a business has:</p>
                    <ul class="feature-list">
                        <li>Assets = $50,000</li>
                        <li>Liabilities = $20,000</li>
                        <li>Then Owner's Equity = $30,000</li>
                    </ul>
                    <p><strong>Check:</strong> $50,000 = $20,000 + $30,000 ✓</p>
                </div>
            </div>

            <div class="lesson-section">
                <h3>📝 Summary - Key Points</h3>
                <ul class="feature-list">
                    <li><strong>5 Account Types:</strong> Assets, Liabilities, Owner's Equity, Revenue, Expenses</li>
                    <li><strong>DEAD:</strong> Drawing, Expenses, Assets, Drawing - increase with DEBITS</li>
                    <li><strong>CORL:</strong> Credits, Owner's Equity, Revenue, Liabilities - increase with CREDITS</li>
                    <li><strong>Normal Balance:</strong> Always on the INCREASE side</li>
                    <li><strong>Equation:</strong> Assets = Liabilities + Owner's Equity (must always balance)</li>
                </ul>
            </div>

            <div class="lesson-section">
                <h3>✅ Test Your Knowledge</h3>
                <p>Ready to practice? Take the <strong>Account Classification Quiz</strong> to test what you learned!</p>
                <p>The quiz covers all 5 account types and DEAD CORL concepts.</p>
            </div>
        `
    },
    'journal-entries': {
        title: 'Journal Entries & T-Accounts',
        subtitle: 'Beginner • 25 minutes',
        content: `
            <div class="lesson-section">
                <h3>🎯 What You'll Learn</h3>
                <ul class="feature-list">
                    <li>How to record transactions in the General Journal</li>
                    <li>8 common transaction types</li>
                    <li>Compound journal entries</li>
                    <li>T-Account visualization</li>
                </ul>
            </div>

            <div class="lesson-section">
                <h3>1️⃣ What is a Journal Entry?</h3>
                <p>A journal entry is a record of a business transaction. Every entry affects at least 2 accounts (double-entry accounting).</p>
                <p><strong>Format:</strong></p>
                <div class="example-box">
                    <strong>Date | Account Name | Debit | Credit</strong><br>
                    Jan 5 | Cash in Bank | 500 |<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| Owner, Capital | | 500
                </div>
                <p>💡 <strong>Rule:</strong> Debit account(s) listed first, Credit account(s) indented.</p>
            </div>

            <div class="lesson-section">
                <h3>2️⃣ DEAD CORL Review</h3>
                <p>Remember which accounts increase with debits vs credits:</p>
                <div class="dead-corl-grid">
                    <div class="dead-side">
                        <h4>DEAD = Debits ↑</h4>
                        <ul class="feature-list">
                            <li><strong>D</strong>rawing</li>
                            <li><strong>E</strong>xpenses</li>
                            <li><strong>A</strong>ssets</li>
                            <li><strong>D</strong>rawing (repeated for emphasis!)</li>
                        </ul>
                    </div>
                    <div class="corl-side">
                        <h4>CORL = Credits ↑</h4>
                        <ul class="feature-list">
                            <li><strong>C</strong>redits</li>
                            <li><strong>O</strong>wner's Equity</li>
                            <li><strong>R</strong>evenue</li>
                            <li><strong>L</strong>iabilities</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="lesson-section">
                <h3>3️⃣ Eight Common Transactions</h3>

                <div class="example-box">
                    <h4>1. Paid cash for supplies</h4>
                    <strong>DR</strong> Supplies<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> Cash in Bank<br>
                    <em>(Asset ↑, Asset ↓)</em>
                </div>

                <div class="example-box">
                    <h4>2. Owner invested cash</h4>
                    <strong>DR</strong> Cash in Bank<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> Owner, Capital<br>
                    <em>(Asset ↑, OE ↑)</em>
                </div>

                <div class="example-box">
                    <h4>3. Received cash from customer</h4>
                    <strong>DR</strong> Cash in Bank<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> Revenue<br>
                    <em>(Asset ↑, Revenue ↑)</em>
                </div>

                <div class="example-box">
                    <h4>4. Paid cash for expense</h4>
                    <strong>DR</strong> Rent Expense<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> Cash in Bank<br>
                    <em>(Expense ↑, Asset ↓)</em>
                </div>

                <div class="example-box">
                    <h4>5. Purchased on account (BOAP!)</h4>
                    <strong>DR</strong> Supplies<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> Accounts Payable<br>
                    <em>Buy On Accounts Payable</em>
                </div>

                <div class="example-box">
                    <h4>6. Sold on account (SOAR!)</h4>
                    <strong>DR</strong> Accounts Receivable<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> Sales<br>
                    <em>Sell On Accounts Receivable</em>
                </div>

                <div class="example-box">
                    <h4>7. Paid cash on account</h4>
                    <strong>DR</strong> Accounts Payable<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> Cash in Bank<br>
                    <em>(Liability ↓, Asset ↓)</em>
                </div>

                <div class="example-box">
                    <h4>8. Received cash on account</h4>
                    <strong>DR</strong> Cash in Bank<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> Accounts Receivable<br>
                    <em>(Asset ↑, Asset ↓)</em>
                </div>
            </div>

            <div class="lesson-section">
                <h3>4️⃣ Compound Entries</h3>
                <p>Some transactions affect more than 2 accounts:</p>
                <div class="example-box">
                    <h4>Example: Paid salary and rent</h4>
                    <strong>DR</strong> Salary Expense &nbsp;&nbsp;&nbsp; 1,000<br>
                    <strong>DR</strong> Rent Expense &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 500<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> Cash in Bank &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1,500<br>
                </div>
                <p>💡 Total Debits ALWAYS = Total Credits!</p>
            </div>

            <div class="lesson-section">
                <h3>📝 Summary</h3>
                <ul class="feature-list">
                    <li>Journal entries record transactions</li>
                    <li>Use DEAD CORL to determine DR/CR</li>
                    <li>Memorize BOAP and SOAR!</li>
                    <li>Debits always = Credits</li>
                    <li>Compound entries can have 3+ accounts</li>
                </ul>
            </div>
        `
    },
    'closing-entries': {
        title: 'Closing Entries (C-DID)',
        subtitle: 'Intermediate • 20 minutes',
        content: `
            <div class="lesson-section">
                <h3>🎯 What You'll Learn</h3>
                <ul class="feature-list">
                    <li>Why we close accounts at year-end</li>
                    <li>C-DID closing order</li>
                    <li>How to close temporary accounts</li>
                    <li>Income Summary account</li>
                </ul>
            </div>

            <div class="lesson-section">
                <h3>1️⃣ Why Close Accounts?</h3>
                <p>At year-end, we close <strong>temporary accounts</strong> to zero them out for the new year.</p>
                <p><strong>Temporary Accounts (RED-C):</strong></p>
                <ul class="feature-list">
                    <li><strong>R</strong>evenue</li>
                    <li><strong>E</strong>xpenses</li>
                    <li><strong>D</strong>rawing</li>
                    <li><strong>C</strong>ost of Goods Sold</li>
                </ul>
                <p><strong>Permanent Accounts:</strong> Assets, Liabilities, Capital (never close!)</p>
            </div>

            <div class="lesson-section">
                <h3>2️⃣ C-DID Closing Order</h3>
                <p>Memorize this order!</p>
                <div class="example-box">
                    <h4>Step 1: Close CREDITS (Revenue)</h4>
                    <strong>DR</strong> Sales<br>
                    <strong>DR</strong> Fees Earned<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> Income Summary<br>
                    <em>(Close all revenue to Income Summary)</em>
                </div>

                <div class="example-box">
                    <h4>Step 2: Close DEBITS (Expenses)</h4>
                    <strong>DR</strong> Income Summary<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> Rent Expense<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> Salary Expense<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> Supplies Expense<br>
                    <em>(Close all expenses to Income Summary)</em>
                </div>

                <div class="example-box">
                    <h4>Step 3: Close INCOME Summary</h4>
                    <strong>DR</strong> Income Summary<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> Owner, Capital<br>
                    <em>(Transfer net income to capital)</em><br>
                    <strong>OR if net loss:</strong><br>
                    <strong>DR</strong> Owner, Capital<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> Income Summary
                </div>

                <div class="example-box">
                    <h4>Step 4: Close DRAWING</h4>
                    <strong>DR</strong> Owner, Capital<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> Owner, Drawing<br>
                    <em>(Close drawing to capital)</em>
                </div>
            </div>

            <div class="lesson-section">
                <h3>3️⃣ Income Summary Explained</h3>
                <p><strong>Income Summary</strong> is a temporary account used ONLY during closing.</p>
                <p><strong>What it does:</strong></p>
                <ul class="feature-list">
                    <li>Collects all revenue (credits)</li>
                    <li>Collects all expenses (debits)</li>
                    <li>Balance = Net Income or Net Loss</li>
                    <li>Then closes to Capital</li>
                </ul>
                <div class="example-box">
                    <strong>Example T-Account:</strong><br>
                    Income Summary<br>
                    Left (DR): Expenses 100<br>
                    Right (CR): Revenue 400<br>
                    Balance: 300 CR = Net Income!
                </div>
            </div>

            <div class="lesson-section">
                <h3>4️⃣ After Closing</h3>
                <p><strong>All temporary accounts = ZERO</strong></p>
                <ul class="feature-list">
                    <li>Revenue accounts = $0</li>
                    <li>Expense accounts = $0</li>
                    <li>Drawing account = $0</li>
                    <li>Income Summary = $0</li>
                </ul>
                <p><strong>Permanent accounts keep their balances</strong></p>
                <ul class="feature-list">
                    <li>Assets stay</li>
                    <li>Liabilities stay</li>
                    <li>Capital updated with net income/loss and drawing</li>
                </ul>
            </div>

            <div class="lesson-section">
                <h3>📝 Summary</h3>
                <ul class="feature-list">
                    <li>C-DID = Closing order</li>
                    <li>RED-C = Temporary accounts to close</li>
                    <li>Income Summary collects revenue & expenses</li>
                    <li>All temporary accounts → $0 after closing</li>
                    <li>Permanent accounts remain open</li>
                </ul>
            </div>
        `
    },
    'gaap-concepts': {
        title: 'GAAP Concepts & Principles',
        subtitle: 'Intermediate • 15 minutes',
        badge: 'intermediate',
        content: `
            <div class="lesson-section">
                <h3>🎯 What You'll Learn</h3>
                <ul class="feature-list">
                    <li>All 14 GAAP concepts, principles, assumptions & constraints</li>
                    <li>How to match real-world scenarios to the correct concept</li>
                    <li>Common UIL traps — telling similar concepts apart</li>
                    <li>Memory aids for quick recall on test day</li>
                </ul>
            </div>

            <div class="lesson-section">
                <h3>1️⃣ The 14 GAAP Concepts (A–N)</h3>
                <p>On UIL tests you'll see descriptions and must write the identifying letter. Here they all are:</p>

                <div class="example-box">
                    <h4>A — Accounting Period Cycle</h4>
                    <p>Business life is divided into regular time periods (month, quarter, year). Financial statements cover a <strong>specific period of time</strong>.</p>
                    <p><em>Clue words: "specific period," "regular intervals," heading says "For the Year Ended…"</em></p>
                </div>

                <div class="example-box">
                    <h4>B — Business Entity</h4>
                    <p>Business transactions are kept <strong>separate from the owner's personal</strong> transactions.</p>
                    <p><em>Clue words: "separate from owner," "personal transactions not recorded"</em></p>
                </div>

                <div class="example-box">
                    <h4>C — Conservatism</h4>
                    <p>When two acceptable methods exist, choose the one <strong>least likely to overstate</strong> assets or income.</p>
                    <p><em>Clue words: "least likely to overstate," "Lower of Cost or Market"</em></p>
                </div>

                <div class="example-box">
                    <h4>D — Consistent Reporting</h4>
                    <p>Use the <strong>same accounting methods</strong> the same way from period to period so statements are comparable.</p>
                    <p><em>Clue words: "same method each year," "period to period," "comparability"</em></p>
                </div>

                <div class="example-box">
                    <h4>E — Full (Adequate) Disclosure</h4>
                    <p>Financial statements must include <strong>all information</strong> a user needs to make informed decisions, including footnotes.</p>
                    <p><em>Clue words: "footnotes," "all information necessary," "pending lawsuit disclosed"</em></p>
                </div>

                <div class="example-box">
                    <h4>F — Going Concern</h4>
                    <p>A business is assumed to continue operating <strong>indefinitely</strong>. Assets are recorded at cost, not liquidation value.</p>
                    <p><em>Clue words: "indefinitely," "continue operations." ⚠️ UIL trap: NOT "to a fixed date"!</em></p>
                </div>

                <div class="example-box">
                    <h4>G — Historical Cost</h4>
                    <p>Assets are recorded at their <strong>original purchase price</strong>, not current market value.</p>
                    <p><em>Clue words: "amount paid," "original cost," "not current market value"</em></p>
                </div>

                <div class="example-box">
                    <h4>H — Matching Principle</h4>
                    <p>Revenue and the <strong>expenses incurred to earn it</strong> are reported in the same period.</p>
                    <p><em>Clue words: "matched with expenses," "same period," "adjusting entries for supplies/insurance"</em></p>
                </div>

                <div class="example-box">
                    <h4>I — Materiality</h4>
                    <p><strong>Insignificant amounts</strong> don't need strict GAAP treatment. A $5 wastebasket can be expensed immediately.</p>
                    <p><em>Clue words: "insignificant," "too small to matter," "immaterial"</em></p>
                </div>

                <div class="example-box">
                    <h4>J — Objective Evidence</h4>
                    <p>Transactions must be supported by <strong>source documents</strong> — invoices, receipts, bank statements, canceled checks.</p>
                    <p><em>Clue words: "invoices," "receipts," "source documents," "verifiable"</em></p>
                </div>

                <div class="example-box">
                    <h4>K — Realization of Revenue</h4>
                    <p>Revenue is recorded <strong>when earned</strong> (at point of sale), not when cash is received.</p>
                    <p><em>Clue words: "when goods/services are sold," "regardless of when cash is collected"</em></p>
                </div>

                <div class="example-box">
                    <h4>L — Relevance</h4>
                    <p>Information must be <strong>useful for decision-making</strong> — it can help predict future outcomes or confirm past expectations.</p>
                    <p><em>Clue words: "useful," "relates to the decision," "predict/confirm"</em></p>
                </div>

                <div class="example-box">
                    <h4>M — Reliability</h4>
                    <p>Information should be <strong>accurate, unbiased, and verifiable</strong>. Audited statements are more reliable.</p>
                    <p><em>Clue words: "free from bias," "trustworthy," "verified," "audited"</em></p>
                </div>

                <div class="example-box">
                    <h4>N — Unit of Measure</h4>
                    <p>All transactions must be recorded using a <strong>common monetary unit</strong> (e.g., U.S. dollars).</p>
                    <p><em>Clue words: "common unit," "U.S. dollar," "converts foreign currency"</em></p>
                </div>
            </div>

            <div class="lesson-section">
                <h3>2️⃣ Common UIL Traps</h3>
                <p>These pairs are designed to confuse you on tests:</p>

                <div class="example-box">
                    <h4>⚠️ Conservatism (C) vs. Consistent Reporting (D)</h4>
                    <p><strong>C:</strong> Choose the method that understates → about <em>which</em> method to pick</p>
                    <p><strong>D:</strong> Use the same method every year → about <em>sticking with</em> a method</p>
                </div>

                <div class="example-box">
                    <h4>⚠️ Going Concern (F) vs. Historical Cost (G)</h4>
                    <p><strong>F:</strong> WHY we record at cost → because the business continues indefinitely</p>
                    <p><strong>G:</strong> WHAT we record → the original purchase price, not market value</p>
                </div>

                <div class="example-box">
                    <h4>⚠️ Matching Principle (H) vs. Realization of Revenue (K)</h4>
                    <p><strong>H:</strong> Expenses matched to revenue in the SAME period → about pairing expenses with revenue</p>
                    <p><strong>K:</strong> Revenue recorded when EARNED → about when to recognize revenue</p>
                </div>

                <div class="example-box">
                    <h4>⚠️ Full Disclosure (E) vs. Materiality (I)</h4>
                    <p><strong>E:</strong> Disclose EVERYTHING material → include footnotes, don't hide info</p>
                    <p><strong>I:</strong> Trivial items DON'T need strict treatment → $5 items can be expensed</p>
                </div>

                <div class="example-box">
                    <h4>⚠️ Relevance (L) vs. Reliability (M)</h4>
                    <p><strong>L:</strong> Is the information USEFUL for the decision? → about helpfulness</p>
                    <p><strong>M:</strong> Is the information ACCURATE and unbiased? → about trustworthiness</p>
                </div>
            </div>

            <div class="lesson-section">
                <h3>📝 Summary — Quick Reference</h3>
                <ul class="feature-list">
                    <li><strong>A:</strong> Accounting Period Cycle — specific time periods</li>
                    <li><strong>B:</strong> Business Entity — separate from owner</li>
                    <li><strong>C:</strong> Conservatism — least likely to overstate</li>
                    <li><strong>D:</strong> Consistent Reporting — same method each year</li>
                    <li><strong>E:</strong> Full Disclosure — all material info + footnotes</li>
                    <li><strong>F:</strong> Going Concern — operates indefinitely</li>
                    <li><strong>G:</strong> Historical Cost — original purchase price</li>
                    <li><strong>H:</strong> Matching Principle — expenses matched to revenue</li>
                    <li><strong>I:</strong> Materiality — insignificant = skip strict GAAP</li>
                    <li><strong>J:</strong> Objective Evidence — source documents required</li>
                    <li><strong>K:</strong> Realization of Revenue — record when earned</li>
                    <li><strong>L:</strong> Relevance — useful for decisions</li>
                    <li><strong>M:</strong> Reliability — accurate and unbiased</li>
                    <li><strong>N:</strong> Unit of Measure — common monetary unit</li>
                </ul>
            </div>

            <div class="lesson-section">
                <h3>✅ Test Your Knowledge</h3>
                <p>Ready? Take the <strong>GAAP Concepts Matching</strong> practice to match descriptions to principles!</p>
            </div>
        `
    },
    'worksheet-columns': {
        title: 'Worksheet Columns & Extensions',
        subtitle: 'Intermediate • 15 minutes',
        badge: 'intermediate',
        content: `
            <div class="lesson-section">
                <h3>🎯 What You'll Learn</h3>
                <ul class="feature-list">
                    <li>What the 10-column worksheet looks like</li>
                    <li>The 5 column code answers: A, B, C, D, E</li>
                    <li>Which accounts go to Income Statement vs Balance Sheet</li>
                    <li>Special cases: Income Summary, Inventory, Drawing</li>
                </ul>
            </div>

            <div class="lesson-section">
                <h3>1️⃣ The 10-Column Worksheet</h3>
                <p>A worksheet has 5 pairs of Debit/Credit columns:</p>
                <div class="example-box">
                    <h4>Worksheet Structure</h4>
                    <p>1. <strong>Trial Balance</strong> — all account balances listed</p>
                    <p>2. <strong>Adjustments</strong> — end-of-period adjusting entries</p>
                    <p>3. <strong>Adjusted Trial Balance</strong> — TB + adjustments combined</p>
                    <p>4. <strong>Income Statement</strong> — revenue & expense accounts</p>
                    <p>5. <strong>Balance Sheet</strong> — asset, liability & equity accounts</p>
                </div>
                <p>On UIL tests, you're asked: <em>"To which column is the normal balance extended?"</em></p>
            </div>

            <div class="lesson-section">
                <h3>2️⃣ The 5 Answer Codes</h3>
                <div class="example-box">
                    <h4>A = Income Statement DEBIT</h4>
                    <p>Accounts with debit balances that go to the Income Statement</p>
                    <p><strong>Who goes here:</strong> Expenses, COGS accounts (Purchases, Transportation In), Contra-Revenue (Sales Discounts, Sales R&A)</p>
                </div>

                <div class="example-box">
                    <h4>B = Income Statement CREDIT</h4>
                    <p>Accounts with credit balances that go to the Income Statement</p>
                    <p><strong>Who goes here:</strong> Revenue (Sales, Fees Earned), Contra-COGS (Purchases Discounts, Purchases R&A)</p>
                </div>

                <div class="example-box">
                    <h4>C = Balance Sheet DEBIT</h4>
                    <p>Accounts with debit balances that go to the Balance Sheet</p>
                    <p><strong>Who goes here:</strong> Assets (Cash, Equipment, Supplies, Prepaid items), Drawing, Ending Inventory</p>
                </div>

                <div class="example-box">
                    <h4>D = Balance Sheet CREDIT</h4>
                    <p>Accounts with credit balances that go to the Balance Sheet</p>
                    <p><strong>Who goes here:</strong> Liabilities (A/P, Notes Payable), Owner's Capital, Contra-Assets (Accumulated Depreciation)</p>
                </div>

                <div class="example-box">
                    <h4>E = Not Extended</h4>
                    <p>Accounts that appear ONLY in Adjustments and are NOT carried forward</p>
                    <p><strong>Who goes here:</strong> Income Summary, Beginning Merchandise Inventory (adjusted through Income Summary)</p>
                </div>
            </div>

            <div class="lesson-section">
                <h3>3️⃣ The Simple Rule — DEAD CORL Connection</h3>
                <p>You already know DEAD CORL from Lesson 1. Here's how it maps:</p>
                <div class="dead-corl-grid">
                    <div class="dead-side">
                        <h4>DEAD accounts (Debit balance)</h4>
                        <ul class="feature-list">
                            <li><strong>Drawing</strong> → C (BS Debit)</li>
                            <li><strong>Expenses</strong> → A (IS Debit)</li>
                            <li><strong>Assets</strong> → C (BS Debit)</li>
                        </ul>
                        <p style="margin-top:1rem;">💡 Debit-balance accounts go to IS Debit or BS Debit</p>
                    </div>
                    <div class="corl-side">
                        <h4>CORL accounts (Credit balance)</h4>
                        <ul class="feature-list">
                            <li><strong>Owner's Equity</strong> → D (BS Credit)</li>
                            <li><strong>Revenue</strong> → B (IS Credit)</li>
                            <li><strong>Liabilities</strong> → D (BS Credit)</li>
                        </ul>
                        <p style="margin-top:1rem;">💡 Credit-balance accounts go to IS Credit or BS Credit</p>
                    </div>
                </div>
            </div>

            <div class="lesson-section">
                <h3>4️⃣ Special Cases — UIL Favorites!</h3>

                <div class="example-box">
                    <h4>⚠️ Drawing → Balance Sheet Debit (C), NOT Income Statement</h4>
                    <p>Drawing is temporary but it goes to the Balance Sheet! It reduces capital, which is on the BS.</p>
                </div>

                <div class="example-box">
                    <h4>⚠️ Income Summary → Not Extended (E)</h4>
                    <p>Income Summary only appears in Adjustments columns. It is NEVER extended to IS or BS.</p>
                </div>

                <div class="example-box">
                    <h4>⚠️ Beginning Inventory → Not Extended (E)</h4>
                    <p>Beginning Inventory is adjusted through Income Summary and is NOT extended separately.</p>
                </div>

                <div class="example-box">
                    <h4>⚠️ Ending Inventory → Balance Sheet Debit (C)</h4>
                    <p>Ending Inventory is an asset that will be on hand → goes to Balance Sheet Debit.</p>
                </div>

                <div class="example-box">
                    <h4>⚠️ Contra-Assets (Accum. Depr.) → Balance Sheet Credit (D)</h4>
                    <p>Contra-assets have credit balances. They stay with their parent account on the Balance Sheet.</p>
                </div>
            </div>

            <div class="lesson-section">
                <h3>📝 Quick Reference Chart</h3>
                <ul class="feature-list">
                    <li><strong>A (IS Debit):</strong> Expenses, COGS, Contra-Revenue</li>
                    <li><strong>B (IS Credit):</strong> Revenue, Contra-COGS</li>
                    <li><strong>C (BS Debit):</strong> Assets, Drawing, Ending Inventory</li>
                    <li><strong>D (BS Credit):</strong> Liabilities, Capital, Contra-Assets</li>
                    <li><strong>E (Not Extended):</strong> Income Summary, Beginning Inventory</li>
                </ul>
            </div>

            <div class="lesson-section">
                <h3>✅ Test Your Knowledge</h3>
                <p>Ready? Take the <strong>Worksheet Column Quiz</strong> to practice extending accounts!</p>
            </div>
        `
    },
    'gross-profit': {
        title: 'Gross Profit & Income Statements',
        subtitle: 'Intermediate • 15 minutes',
        badge: 'intermediate',
        content: `
            <div class="lesson-section">
                <h3>🎯 What You'll Learn</h3>
                <ul class="feature-list">
                    <li>The income statement chain for merchandising businesses</li>
                    <li>How to calculate Net Sales, Net Purchases, COGS, and Gross Profit</li>
                    <li>What each contra account means and how it reduces totals</li>
                    <li>A full worked example with real numbers</li>
                </ul>
            </div>

            <div class="lesson-section">
                <h3>1️⃣ The 5-Step Chain</h3>
                <p>On UIL tests, you compute these values in order. Each step feeds into the next:</p>
                <div class="example-box">
                    <h4>Step 1: Net Sales</h4>
                    <p><strong>Gross Sales</strong> − Sales Discounts − Sales Returns &amp; Allowances = <strong>Net Sales</strong></p>
                    <p><em>Sales Discounts: discounts given to customers for paying early (e.g., 2/10, n/30)</em></p>
                    <p><em>Sales R&amp;A: merchandise customers returned or price reductions given</em></p>
                </div>

                <div class="example-box">
                    <h4>Step 2: Net Purchases (Cost of Delivered Merchandise)</h4>
                    <p><strong>Purchases</strong> + Transportation In − Purchases Discounts − Purchases Returns &amp; Allowances = <strong>Net Purchases</strong></p>
                    <p><em>Transportation In: freight costs to get purchases delivered to you</em></p>
                    <p><em>Purchases Discounts: discounts you earned from vendors for paying early</em></p>
                    <p><em>Purchases R&amp;A: goods you returned to vendors</em></p>
                </div>

                <div class="example-box">
                    <h4>Step 3: Cost of Merchandise Available for Sale (CMAS)</h4>
                    <p><strong>Beginning Inventory</strong> + Net Purchases = <strong>CMAS</strong></p>
                    <p><em>Everything you COULD have sold during the period</em></p>
                </div>

                <div class="example-box">
                    <h4>Step 4: Cost of Merchandise Sold (COGS)</h4>
                    <p><strong>CMAS</strong> − Ending Inventory = <strong>Cost of Merchandise Sold</strong></p>
                    <p><em>Subtract what's still on the shelves = what you actually sold</em></p>
                </div>

                <div class="example-box">
                    <h4>Step 5: Gross Profit</h4>
                    <p><strong>Net Sales</strong> − Cost of Merchandise Sold = <strong>Gross Profit</strong></p>
                    <p><em>Profit on goods BEFORE operating expenses (rent, salaries, etc.)</em></p>
                </div>
            </div>

            <div class="lesson-section">
                <h3>2️⃣ Worked Example</h3>
                <p>Alpine Trading Co. reports these amounts for the year:</p>
                <div class="example-box">
                    <h4>Given Data</h4>
                    <p>Gross Sales: $120,000 | Sales Discounts: $2,400 | Sales R&amp;A: $3,600</p>
                    <p>Purchases: $65,000 | Transportation In: $2,800 | Purchases Discounts: $1,300 | Purchases R&amp;A: $1,500</p>
                    <p>Beginning Inventory: $25,000 | Ending Inventory: $20,000</p>
                </div>

                <div class="example-box">
                    <h4>Step 1: Net Sales</h4>
                    <p>$120,000 − $2,400 − $3,600 = <strong>$114,000</strong></p>
                </div>

                <div class="example-box">
                    <h4>Step 2: Net Purchases</h4>
                    <p>$65,000 + $2,800 − $1,300 − $1,500 = <strong>$65,000</strong></p>
                </div>

                <div class="example-box">
                    <h4>Step 3: Cost of Merchandise Available for Sale</h4>
                    <p>$25,000 + $65,000 = <strong>$90,000</strong></p>
                </div>

                <div class="example-box">
                    <h4>Step 4: Cost of Merchandise Sold</h4>
                    <p>$90,000 − $20,000 = <strong>$70,000</strong></p>
                </div>

                <div class="example-box">
                    <h4>Step 5: Gross Profit</h4>
                    <p>$114,000 − $70,000 = <strong>$44,000</strong></p>
                </div>
            </div>

            <div class="lesson-section">
                <h3>3️⃣ Key Memory Tips</h3>
                <ul class="feature-list">
                    <li><strong>Contra accounts subtract:</strong> Discounts and Returns always REDUCE their parent</li>
                    <li><strong>Transportation In adds:</strong> It's the cost to get goods to YOU (increases purchase cost)</li>
                    <li><strong>Inventory sandwich:</strong> Beginning + Net Purchases − Ending = what you sold</li>
                    <li><strong>Gross ≠ Net:</strong> Gross Profit is BEFORE operating expenses; Net Income is AFTER</li>
                </ul>
            </div>

            <div class="lesson-section">
                <h3>✅ Test Your Knowledge</h3>
                <p>Ready? Take the <strong>Gross Profit Calculator</strong> practice with random scenarios!</p>
            </div>
        `
    },
    'bank-reconciliation': {
        title: 'Bank Reconciliation',
        subtitle: 'Intermediate • 15 minutes',
        badge: 'intermediate',
        content: `
            <div class="lesson-section">
                <h3>🎯 What You'll Learn</h3>
                <ul class="feature-list">
                    <li>Why the bank balance and checkbook balance don't match</li>
                    <li>Bank side: Deposits in Transit &amp; Outstanding Checks</li>
                    <li>Book side: Service Charges, NSF checks, Interest Income</li>
                    <li>How both sides must equal the same Reconciled Balance</li>
                </ul>
            </div>

            <div class="lesson-section">
                <h3>1️⃣ Why Reconcile?</h3>
                <p>At month-end, your <strong>bank statement balance</strong> and your <strong>checkbook balance</strong> almost never match. This isn't an error — it's a timing difference.</p>
                <div class="example-box">
                    <h4>The bank doesn't know about:</h4>
                    <ul class="feature-list">
                        <li>Deposits you made recently that haven't cleared yet</li>
                        <li>Checks you wrote that haven't been cashed yet</li>
                    </ul>
                </div>
                <div class="example-box">
                    <h4>You don't know about:</h4>
                    <ul class="feature-list">
                        <li>Service charges the bank deducted</li>
                        <li>NSF (bounced) checks returned</li>
                        <li>Interest the bank added</li>
                    </ul>
                </div>
            </div>

            <div class="lesson-section">
                <h3>2️⃣ Bank Side — Start with Bank Statement Balance</h3>
                <div class="example-box">
                    <h4>Bank Statement Balance</h4>
                    <p><strong>+ Deposits in Transit</strong> (you deposited, bank hasn't recorded yet)</p>
                    <p><strong>− Outstanding Checks</strong> (you wrote checks, they haven't cleared)</p>
                    <p>= <strong>Adjusted Bank Balance</strong></p>
                </div>
                <p>💡 <strong>Memory tip:</strong> Bank side = things the BANK doesn't know about yet</p>
            </div>

            <div class="lesson-section">
                <h3>3️⃣ Book Side — Start with Checkbook Balance</h3>
                <div class="example-box">
                    <h4>Checkbook Balance</h4>
                    <p><strong>+ Interest Income</strong> (bank added interest you didn't record)</p>
                    <p><strong>− Service Charges</strong> (monthly fees, check printing)</p>
                    <p><strong>− NSF Checks</strong> (customer's check bounced — money you thought you had)</p>
                    <p><strong>− Other Charges</strong> (wire transfer fees, safe deposit box)</p>
                    <p>= <strong>Adjusted Book Balance</strong></p>
                </div>
                <p>💡 <strong>Memory tip:</strong> Book side = things YOU didn't know about yet</p>
            </div>

            <div class="lesson-section">
                <h3>4️⃣ The Golden Rule</h3>
                <p style="font-size:1.5rem; text-align:center; font-weight:bold; margin:2rem 0;">
                    Adjusted Bank Balance = Adjusted Book Balance
                </p>
                <p>If they're equal, you're done! This is the <strong>true cash balance</strong>.</p>
                <p>If they're NOT equal, there's an error somewhere you need to find.</p>
            </div>

            <div class="lesson-section">
                <h3>5️⃣ Worked Example</h3>
                <div class="example-box">
                    <h4>Given Data</h4>
                    <p>Bank Statement Balance: $8,500</p>
                    <p>Checkbook Balance: $7,425</p>
                    <p>Deposit in Transit: $1,200</p>
                    <p>Outstanding Checks: #401 $350, #405 $600, #408 $275</p>
                    <p>Service Charge: $25 | NSF Check: $400 | Interest Income: $75</p>
                </div>

                <div class="example-box">
                    <h4>Bank Side</h4>
                    <p>$8,500 + $1,200 − ($350 + $600 + $275) = $8,500 + $1,200 − $1,225 = <strong>$8,475</strong></p>
                </div>

                <div class="example-box">
                    <h4>Book Side</h4>
                    <p>$7,425 + $75 − $25 − $400 − $0 = <strong>$7,075</strong></p>
                    <p>Wait — these don't match! That means we need to re-check our numbers.</p>
                    <p><em>(On UIL tests the numbers are designed to balance. If they don't, check your arithmetic!)</em></p>
                </div>
            </div>

            <div class="lesson-section">
                <h3>6️⃣ Common UIL Tricks</h3>
                <ul class="feature-list">
                    <li><strong>Multiple deposits in transit</strong> — add them ALL</li>
                    <li><strong>Multiple outstanding checks</strong> — add them ALL, then subtract the total</li>
                    <li><strong>NSF check</strong> — this goes on the BOOK side (it's a charge you didn't know about)</li>
                    <li><strong>Interest earned</strong> — goes on the BOOK side as an ADDITION</li>
                    <li><strong>Deposit in transit</strong> — goes on the BANK side (bank doesn't have it yet)</li>
                </ul>
            </div>

            <div class="lesson-section">
                <h3>📝 Summary</h3>
                <ul class="feature-list">
                    <li><strong>Bank Side:</strong> Bank Balance + Deposits in Transit − Outstanding Checks</li>
                    <li><strong>Book Side:</strong> Checkbook Balance + Interest − Service Charges − NSF − Other</li>
                    <li><strong>Both sides must equal</strong> the true Reconciled Balance</li>
                    <li><strong>Bank side</strong> = what the bank doesn't know</li>
                    <li><strong>Book side</strong> = what you don't know</li>
                </ul>
            </div>

            <div class="lesson-section">
                <h3>✅ Test Your Knowledge</h3>
                <p>Ready? Take the <strong>Bank Reconciliation Practice</strong> with random scenarios!</p>
            </div>
        `
    },
    'payroll-fundamentals': {
        title: 'Payroll Fundamentals',
        subtitle: 'Advanced • 20 minutes',
        badge: 'advanced',
        content: `
            <div class="lesson-section">
                <h3>🎯 What You'll Learn</h3>
                <ul class="feature-list">
                    <li>How to calculate Gross Pay (regular + overtime)</li>
                    <li>The 4 employer payroll taxes and their caps</li>
                    <li>The two payroll entries and which items go where</li>
                    <li>UIL codes: SE-E (Salary Entry) vs PTE-R (Payroll Tax Expense)</li>
                </ul>
            </div>

            <div class="lesson-section">
                <h3>1️⃣ Gross Pay Calculation</h3>
                <div class="example-box">
                    <h4>Regular Pay</h4>
                    <p>First 40 hours/week × Hourly Rate = <strong>Regular Pay</strong></p>
                </div>
                <div class="example-box">
                    <h4>Overtime Pay</h4>
                    <p>Hours over 40 × (Hourly Rate × 1.5) = <strong>Overtime Pay</strong></p>
                    <p><em>The overtime RATE is 1.5 times the regular rate (time-and-a-half)</em></p>
                </div>
                <div class="example-box">
                    <h4>Gross Pay</h4>
                    <p>Regular Pay + Overtime Pay = <strong>Gross Pay</strong></p>
                    <p><em>This is BEFORE any deductions (taxes, insurance, etc.)</em></p>
                </div>

                <div class="example-box">
                    <h4>Example</h4>
                    <p>Jordan works 46 hours at $15.00/hr:</p>
                    <p>Regular: 40 × $15.00 = $600.00</p>
                    <p>OT Rate: $15.00 × 1.5 = $22.50</p>
                    <p>OT Pay: 6 × $22.50 = $135.00</p>
                    <p>Gross Pay: $600.00 + $135.00 = <strong>$735.00</strong></p>
                </div>
            </div>

            <div class="lesson-section">
                <h3>2️⃣ The 4 Employer Payroll Taxes</h3>
                <p>Employers pay these taxes ON TOP of employee wages:</p>

                <div class="example-box">
                    <h4>Social Security (FICA-SS) — 6.2%</h4>
                    <p><strong>Cap: ~$160,200/year</strong> (varies by year)</p>
                    <p>Once an employee earns over the cap, employer STOPS paying SS on them</p>
                    <p><em>Both employer and employee pay 6.2% each (12.4% total)</em></p>
                </div>

                <div class="example-box">
                    <h4>Medicare (FICA-Med) — 1.45%</h4>
                    <p><strong>NO CAP</strong> — applies to ALL earnings</p>
                    <p><em>Both employer and employee pay 1.45% each (2.9% total)</em></p>
                </div>

                <div class="example-box">
                    <h4>Federal Unemployment Tax (FUTA) — 0.6%</h4>
                    <p><strong>Cap: $7,000/year</strong> per employee</p>
                    <p>Once an employee earns $7,000, FUTA stops</p>
                    <p><em>EMPLOYER ONLY — employees don't pay FUTA</em></p>
                </div>

                <div class="example-box">
                    <h4>State Unemployment Tax (SUTA) — varies (1.1%–2.7%)</h4>
                    <p><strong>Cap: $9,000/year</strong> per employee</p>
                    <p>Once an employee earns $9,000, SUTA stops</p>
                    <p><em>EMPLOYER ONLY — employees don't pay SUTA</em></p>
                </div>
            </div>

            <div class="lesson-section">
                <h3>3️⃣ Cap Logic — The Tricky Part!</h3>
                <p>When calculating taxes, you must check if the employee has exceeded the cap:</p>
                <div class="example-box">
                    <h4>Example: FUTA Cap ($7,000)</h4>
                    <p>Employee has cumulative earnings of $6,200 before this pay period</p>
                    <p>Current gross pay: $1,500</p>
                    <p>Amount subject to FUTA: min($1,500, $7,000 − $6,200) = min($1,500, $800) = <strong>$800</strong></p>
                    <p>FUTA tax: $800 × 0.6% = <strong>$4.80</strong></p>
                    <p><em>Only the first $800 of this paycheck is taxable — the rest is over the $7,000 cap!</em></p>
                </div>
                <div class="example-box">
                    <h4>Already Over the Cap?</h4>
                    <p>If cumulative earnings are already $7,500 (over $7,000 FUTA cap):</p>
                    <p>Amount subject to FUTA: $0 — no FUTA tax this period!</p>
                </div>
            </div>

            <div class="lesson-section">
                <h3>4️⃣ The Two Payroll Entries</h3>
                <p>There are TWO separate journal entries for every payroll. UIL tests ask you to classify items into the correct entry:</p>

                <div class="example-box">
                    <h4>Entry 1: Salary Expense (SE-E) — Employee Withholdings</h4>
                    <p><strong>DR</strong> Salary Expense (gross pay)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> Cash (net pay — what the employee actually receives)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> Federal Income Tax Payable (FIT withheld)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> State Income Tax Payable (SIT withheld)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> Social Security Payable (employee's 6.2%)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> Medicare Payable (employee's 1.45%)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> Other: Health Insurance, Union Dues, 401(k), Bonds, Charity</p>
                </div>

                <div class="example-box">
                    <h4>Entry 2: Payroll Tax Expense (PTE-R) — Employer Taxes</h4>
                    <p><strong>DR</strong> Payroll Tax Expense</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> Social Security Payable (employer's 6.2% match)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> Medicare Payable (employer's 1.45% match)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> Federal Unemployment Tax Payable (FUTA — employer only)</p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;<strong>CR</strong> State Unemployment Tax Payable (SUTA — employer only)</p>
                </div>
            </div>

            <div class="lesson-section">
                <h3>5️⃣ Classification Memory Aid</h3>
                <div class="dead-corl-grid">
                    <div class="dead-side">
                        <h4>Salary Entry ONLY (SE-E)</h4>
                        <ul class="feature-list">
                            <li>Federal Income Tax (FIT)</li>
                            <li>State Income Tax (SIT)</li>
                            <li>Health Insurance</li>
                            <li>Union Dues</li>
                            <li>401(k) / Retirement</li>
                            <li>Savings Bonds</li>
                            <li>Charitable Contributions</li>
                        </ul>
                        <p style="margin-top:1rem;">💡 Employee deductions = Salary Entry</p>
                    </div>
                    <div class="corl-side">
                        <h4>Payroll Tax Expense ONLY (PTE-R)</h4>
                        <ul class="feature-list">
                            <li>FUTA (Federal Unemployment)</li>
                            <li>SUTA (State Unemployment)</li>
                            <li>Workers' Compensation</li>
                        </ul>
                        <p style="margin-top:1rem;">💡 Employer-only taxes = PTE</p>
                    </div>
                </div>
                <div class="example-box" style="margin-top:1rem;">
                    <h4>⚠️ In BOTH Entries</h4>
                    <p><strong>Social Security</strong> and <strong>Medicare</strong> appear in BOTH entries — employee pays AND employer matches!</p>
                </div>
            </div>

            <div class="lesson-section">
                <h3>📝 Summary</h3>
                <ul class="feature-list">
                    <li><strong>Gross Pay:</strong> Regular (40 hrs × rate) + Overtime (extra hrs × rate × 1.5)</li>
                    <li><strong>4 Employer Taxes:</strong> SS (6.2%, cap), Medicare (1.45%, no cap), FUTA (0.6%, $7K cap), SUTA (varies, $9K cap)</li>
                    <li><strong>Cap logic:</strong> Once cumulative earnings exceed cap → $0 tax for that period</li>
                    <li><strong>Salary Entry:</strong> FIT, SIT, insurance, voluntary deductions + employee SS/Med</li>
                    <li><strong>PTE Entry:</strong> FUTA, SUTA, workers' comp + employer SS/Med match</li>
                    <li><strong>SS &amp; Medicare:</strong> The only items in BOTH entries</li>
                </ul>
            </div>

            <div class="lesson-section">
                <h3>✅ Test Your Knowledge</h3>
                <p>Ready? Take the <strong>Payroll Practice</strong> with all 3 problem types!</p>
            </div>
        `
    }
};

function showLesson(id) {
    const lesson = lessons[id];
    if (!lesson) return;
    const badgeClass = lesson.badge || 'beginner';
    const badgeLabel = badgeClass.charAt(0).toUpperCase() + badgeClass.slice(1);
    document.getElementById('lessonContent').innerHTML = `
        <div class="hero">
            <h1>${lesson.title}</h1>
            <p class="hero-subtitle"><span class="badge badge-${badgeClass}">${badgeLabel}</span> ${lesson.subtitle}</p>
        </div>
        ${lesson.content}
        <button class="btn" onclick="completeLesson('${id}')">✓ Mark Complete</button>
    `;
    showSection('lesson-viewer');
}

function completeLesson(id) {
    Progress.completeLesson(id);
    setTimeout(() => showSection('lessons'), 1500);
}
