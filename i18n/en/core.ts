import { LocaleMessageObject } from 'vue-i18n/types'

const msgs: LocaleMessageObject = {
  'nav.header.login': 'Login',
  'nav.header.logout': 'Logout',
  'nav.menu.home': 'Home',
  'nav.menu.apps': 'Apps',
  'nav.menu.apps.memos': 'Memos',
  'nav.menu.utils': 'Utilities',
  'nav.menu.utils.colours': 'Colours',
  'user.email.label': 'Email',
  'user.email.err.invalid': 'Please use a valid email',
  'user.email.err.not-available': 'Email is not available',
  'user.email.err.not-found': 'Email is not found',
  'user.email.err.required': 'Email is required',
  'user.login.title': 'Login',
  'user.login.submit': 'Login',
  'user.login.status.processing': 'Login in progress',
  'user.login.status.failed': 'Login failed, please check your credentials.',
  'user.login.status.success': 'Logged in! Redirecting soon...',
  'user.login.status.error': 'An unknown error occurred',
  'user.password.label': 'Password',
  'user.password.confirm.label': 'Password (confirm)',
  'user.password.err.mismatch': 'Passwords mismtach',
  'user.password.err.required': 'Password is required',
  'user.password.err.too-short': 'Password is too short',
  'user.pwd-request.title': 'Password reset',
  'user.pwd-request.submit': 'Reset',
  'user.pwd-request.status.processing': 'Sending a password rest email away...',
  'user.pwd-request.status.success':
    'Password reset email sent! please check your mailbox',
  'user.pwd-request.status.error':
    'Oh no! An unknown error happened, is the email correct?',
  'user.pwd-update.title': 'Password reset',
  'user.pwd-update.submit': 'Reset',
  'user.pwd-update.status.processing': 'Updating password',
  'user.pwd-update.status.success': 'Password successfully reset!',
  'user.pwd-update.status.error': 'Oh no! An unknown error happened',
  'user.register.title': 'Register',
  'user.register.submit': 'Register',
  'user.register.status.processing': 'Registration in progress...',
  'user.register.status.success': 'Registration sucessful \\o/',
  'user.register.status.failed': 'Registration failed: email is already taken',
  'user.register.status.error':
    'Registration failed: an unknown error occurred T_T',
  'user.username.label': 'Username',
  'user.username.err.required': 'Can you give some name?'
}

export default msgs
