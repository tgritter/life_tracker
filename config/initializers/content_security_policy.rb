# Be sure to restart your server when you modify this file.

# Define an application-wide content security policy
# For further information see the following documentation
# https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy

Rails.application.config.content_security_policy do |p|
    p.font_src    :self, :https, :data
    p.img_src     :self, :https, :data
    p.object_src  :none
    p.style_src   :self, :https, :unsafe_inline
  
  
    p.script_src :self, :https
    p.default_src :self, :https
  
    # Specify URI for violation reports
    # p.report_uri "/csp-violation-report-endpoint"
  
    # standard until this moment
    if Rails.env.development?
      p.script_src :self, :https, :unsafe_eval
      p.connect_src :self, :https, 'http://localhost:3035', 'ws://localhost:3035'
    end
  end

# If you are using UJS then enable automatic nonce generation
# Rails.application.config.content_security_policy_nonce_generator = -> request { SecureRandom.base64(16) }

# Set the nonce only to specific directives
# Rails.application.config.content_security_policy_nonce_directives = %w(script-src)

# Report CSP violations to a specified URI
# For further information see the following documentation:
# https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy-Report-Only
# Rails.application.config.content_security_policy_report_only = true
