import { Link } from 'react-router-dom'
import './Legal.css'

function Terms() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <Link className="legal-back" to="/">&larr; Back to starterX</Link>

        <h1>Terms of Service</h1>
        <div className="legal-meta">
          <strong>Last updated:</strong> March 2026<br />
          <strong>Developer:</strong> Georgios Angelidakis<br />
          <strong>Contact:</strong> <a href="mailto:giorgosaggelidakes@gmail.com">giorgosaggelidakes@gmail.com</a>
        </div>

        <hr />

        <h2>1. Acceptance of Terms</h2>
        <p>By downloading, installing, or using starterX ("the Application"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Application.</p>

        <hr />

        <h2>2. Description of the Application</h2>
        <p>starterX is a free workflow automation application that allows users to create scenarios containing app shortcuts, command-line instructions, URL launchers, and timed delays. The Application is provided free of charge and is distributed exclusively through the official starterX landing page.</p>

        <hr />

        <h2>3. Disclaimer of Warranty</h2>
        <p>starterX is provided <strong>"as-is"</strong> and <strong>"as available"</strong> without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
        <p>The developer does not guarantee that:</p>
        <ul>
          <li>The Application will be error-free or uninterrupted</li>
          <li>Defects will be corrected</li>
          <li>The Application is free of viruses or harmful components</li>
          <li>The Application will meet your specific requirements</li>
        </ul>

        <hr />

        <h2>4. Limitation of Liability</h2>
        <p>To the fullest extent permitted by applicable law, Georgios Angelidakis shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to:</p>
        <ul>
          <li>Data loss or corruption</li>
          <li>System instability or crashes</li>
          <li>Hardware damage</li>
          <li>Loss of productivity or business interruption</li>
          <li>Any other damages arising from the use or inability to use the Application</li>
        </ul>
        <p>This limitation applies regardless of whether the developer has been advised of the possibility of such damages.</p>

        <hr />

        <h2>5. User-Defined Commands & Administrative Privileges</h2>
        <p>starterX allows users to configure and execute custom command-line instructions, including commands that may run with administrative privileges on the user's system.</p>
        <p>By using this feature, you acknowledge and agree that:</p>
        <ul>
          <li>All custom commands, scripts, and automation sequences are configured entirely by the user</li>
          <li>Commands are executed solely at the <strong>user's own risk</strong></li>
          <li>The developer assumes <strong>no responsibility</strong> for any system changes, file modifications, registry edits, data loss, or damages resulting from user-defined commands</li>
          <li>It is the <strong>user's sole responsibility</strong> to ensure that all commands configured within starterX are safe, appropriate, and intended for their system environment</li>
          <li>The developer cannot review, monitor, or validate the commands you create</li>
        </ul>
        <p>You should exercise caution when configuring commands that interact with system directories, including but not limited to System32, and should never run commands you do not fully understand.</p>

        <hr />

        <h2>6. Run on Startup Feature</h2>
        <p>The "Run on Startup" feature, when enabled by the user, modifies system startup settings to launch starterX automatically upon system boot. By enabling this feature, you acknowledge that:</p>
        <ul>
          <li>This modification is made at your explicit request</li>
          <li>The developer is not responsible for any issues arising from this configuration</li>
          <li>You can disable this feature at any time from within the Application settings</li>
        </ul>

        <hr />

        <h2>7. Intellectual Property</h2>
        <p>starterX, including its design, code, interface, and branding, is the intellectual property of Georgios Angelidakis. You may not:</p>
        <ul>
          <li>Copy, modify, or distribute the Application or its source code</li>
          <li>Reverse engineer or decompile the Application</li>
          <li>Use the starterX name or branding without written permission</li>
          <li>Sell or sublicense the Application</li>
        </ul>

        <hr />

        <h2>8. Acceptable Use</h2>
        <p>You agree not to use starterX to:</p>
        <ul>
          <li>Execute commands intended to damage, disrupt, or gain unauthorized access to systems</li>
          <li>Violate any applicable local, national, or international law or regulation</li>
          <li>Infringe on the rights of any third party</li>
        </ul>

        <hr />

        <h2>9. Third-Party Software</h2>
        <p>starterX may launch third-party applications at the user's request. The developer is not affiliated with, responsible for, or liable for any third-party software launched through the Application. Use of third-party applications is subject to their own terms and conditions.</p>

        <hr />

        <h2>10. Updates & Changes</h2>
        <p>The developer reserves the right to modify, update, or discontinue the Application at any time without notice. These Terms may also be updated periodically. Continued use of the Application following any changes constitutes acceptance of the revised Terms.</p>

        <hr />

        <h2>11. Governing Law</h2>
        <p>These Terms shall be governed by and construed in accordance with the laws of <strong>Greece</strong> and the applicable regulations of the <strong>European Union</strong>, without regard to conflict of law principles.</p>

        <hr />

        <h2>12. Contact</h2>
        <p>For any questions regarding these Terms, please contact:</p>
        <p><strong>Georgios Angelidakis</strong><br />
        <a href="mailto:giorgosaggelidakes@gmail.com">giorgosaggelidakes@gmail.com</a></p>
      </div>
    </div>
  )
}

export default Terms
