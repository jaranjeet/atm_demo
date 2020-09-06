class InsufficientBalanceError < StandardError; end
class InvalidInputError < StandardError; end
class InsufficientAmountError < StandardError; end
class AccountsController < ApplicationController
  before_action :set_account, only: [:deposit, :withdraw, :check_balance, :view_transactions]
  attr_reader :account

  rescue_from StandardError, with: :render_error_response

  def deposit
    Account.transaction do
      account.update!(balance: balance + amount)
      Transaction.create!(account: account, amount: amount, transaction_type: credit)
    end
    render json: { message: 'Deposited the amount'}, status: :ok
  end

  def withdraw
    raise InsufficientBalanceError, 'Insufficient Balance!' if amount > balance
    Account.transaction do
      account.update!(balance: balance - amount)
      Transaction.create!(account: account, amount: amount, transaction_type: debit)
    end
    render json: { message: 'Amount withdrawn' }, status: :ok
  end

  def check_balance
    render json: { balance: balance }, status: :ok
  end

  def view_transactions
    render json: { statement: account.transactions }, status: :ok
  end

  private

  def set_account
    @account = Account.find_by(id: params[:account_number])
  end

  def amount
    raise InvalidInputError, 'Provide valid amount' unless valid_amount?
    raise InsufficientAmountError, 'Insufficient amount' if insufficient_amount?
    params[:amount].to_f
  end

  def valid_amount?
    params[:amount]&.scan(/\D/)&.empty?
  end

  def insufficient_amount?
    params[:amount]&.to_f === 0.0
  end

  def balance
    account.balance
  end

  def credit
    Transaction.transaction_types[:credit]
  end

  def debit
    Transaction.transaction_types[:debit]
  end

  def render_error_response error
    Rails.logger.error(error.message)
    render json: { message: error.message }, status: :unprocessable_entity
  end
end
