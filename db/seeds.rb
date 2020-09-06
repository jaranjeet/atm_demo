user = User.find_or_initialize_by(name: 'Ranjeet Jagtap', email: 'ranjeet.jagtap43@gmail.com')
user.save
account = Account.create()
user_account = UserAccount.find_or_initialize_by(user: user, account: account)
user_account.save