/*
 * Copyright 2020 Typelevel
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package cats.effect

private[effect] sealed abstract class AsyncState extends Product with Serializable {
  def result: Either[Throwable, Any] = sys.error("impossible")
}

private[effect] object AsyncState {
  // no one completed
  case object Initial extends AsyncState
  case object RegisteredNoFinalizer extends AsyncState
  case object RegisteredWithFinalizer extends AsyncState
  final case class Complete(override val result: Either[Throwable, Any]) extends AsyncState
}