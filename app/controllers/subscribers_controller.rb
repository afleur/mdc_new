class SubscribersController < ApplicationController
  def index
    @subscriber = Subscriber.new
  end

  def create
    @subscriber = Subscriber.new(subscriber_params)
    if @subscriber.save
      notice = "Saved Successfully"
    else
      notice = "PB"
    end
  end

  private

  def subscriber_params
    params.require(:subscriber).permit(:email)
  end
end
