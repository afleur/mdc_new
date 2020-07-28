class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :manifesto, :about, :contact]

  def home
  end

  def manifesto
  end

end
