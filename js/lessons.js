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
    }
};

function showLesson(id) {
    const lesson = lessons[id];
    if (!lesson) return;
    document.getElementById('lessonContent').innerHTML = `
        <div class="hero">
            <h1>${lesson.title}</h1>
            <p class="hero-subtitle"><span class="badge badge-beginner">Beginner</span> ${lesson.subtitle}</p>
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
