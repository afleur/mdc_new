class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :manifesto, :about, :contact, :episode]

  def home
  end

  def manifesto
  end

  def non_footer_action
  @skip_footer = true
  end

end
